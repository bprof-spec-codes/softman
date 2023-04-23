import {
  AfterViewInit,
  Component, ElementRef, Input,
  ViewChild, ViewEncapsulation
} from '@angular/core';

import { FormOptionsType, ButtonType } from 'src/app/shared'

@Component({
  selector: 'app-shared-form',
  styleUrls: ['./shared-form.component.scss'],
  templateUrl: './shared-form.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SharedFormComponent implements AfterViewInit {
    @Input() options!: FormOptionsType

    @ViewChild('form') form!: ElementRef<HTMLFormElement>
    @ViewChild('btn_container_parent') btnContainerParent?: ElementRef<HTMLDivElement>
    @ViewChild('btn_container_left') btnContainerLeft?: ElementRef<HTMLDivElement>
    @ViewChild('btn_container_right') btnContainerRight?: ElementRef<HTMLDivElement>

    ngAfterViewInit() {
      this.form.nativeElement.style.setProperty(
        '--computed-height', `${this.form.nativeElement.offsetHeight.toString()}px`)

      const btnContainerLeftHeight = this.btnContainerLeft?.nativeElement.offsetHeight ?? 0
      const btnContainerRightHeight = this.btnContainerRight?.nativeElement.offsetHeight ?? 0
      
      this.btnContainerParent?.nativeElement.style.setProperty(
        '--computed-height', `${
          (btnContainerLeftHeight > btnContainerRightHeight ? btnContainerLeftHeight : btnContainerRightHeight) + 1
        }px`)
    }

    generateClassLayer: (
      button: ButtonType, i: number
    ) => string = (button, i) => {
      return [
        button.display,
        i === 0 || (i === 1 && button.display === 'inline-right') ? 'mt-6' : '',
        i === this.options.buttons.length - 1 ||
        (i === this.options.buttons.length - 2 && button.display === 'inline-left') ? 'mb-12' : 'mb-6',
      ].join(' ')
    }
}