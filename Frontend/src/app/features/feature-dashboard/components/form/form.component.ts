import {
  AfterViewInit,
  Component, ElementRef, Input,
  ViewChild, ViewEncapsulation
} from '@angular/core';

type ButtonType = {
  display: 'block-full' | 'block-normal' | 'inline-left' | 'inline-right'
  type: 'filled' | 'outlined'
  text: string
}

export type FormOptionsType = {
    title: string
    inputs: { type: string, text: string }[]
    buttons: ButtonType[]
    mslogin?: 'with hr' | 'without hr'
}

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  template: `
    <form #form>

        <span>{{options.title}}</span>

        <ng-container
          *ngFor="let input of options.inputs"
        >

          <ng-container
            *ngIf="
              input.type === 'file'
              else elseInput
            "
          >
            <input
              [type]="input.type"
              hidden
            >
            <app-shared-button
              nghost-btn-file
              [text]="input.text"
            ></app-shared-button>
          </ng-container>

          <ng-template #elseInput>
            <input     
              [type]="input.type"
              [placeholder]="input.text"
            >
          </ng-template>
          
        </ng-container>
        
        <ng-container
          *ngFor="
            let button of options.buttons
            index as i
          "
        >
          
          <div
            #btn_container_parent
            *ngIf="
              button.display === 'inline-left'
              else elseBtn
            "
            class="btn-container-parent"
          >
            <div
              #btn_container_left
              class="btn-container btn-container-left"
            >
              <app-shared-button
                nghost-btn-submit
                [text]="button.text"
                [type]="button.type"
                [classLayer]="generateClassLayer(button, i)"
                ngClass="h-fit"
              ></app-shared-button>
            </div>
            <div
              #btn_container_right
              class="btn-container btn-container-right"
            >
              <app-shared-button
                nghost-btn-submit
                [text]="options.buttons[i + 1].text"
                [type]="options.buttons[i + 1].type"
                [classLayer]="generateClassLayer(options.buttons[i + 1], i + 1)"
                ngClass="h-fit"
              ></app-shared-button>
            </div>            
          </div>

          <ng-template #elseBtn>
            <app-shared-button
              *ngIf="button.display !== 'inline-right'"
              nghost-btn-submit
              [text]="button.text"
              [type]="button.type"
              [classLayer]="generateClassLayer(button, i)"
              ngClass="h-fit"
            ></app-shared-button>
          </ng-template>
          
        </ng-container>
        
        <div
          *ngIf="options.mslogin"
          class="ms-container"
        >
          <hr
            [ngClass]="[
              options.mslogin === 'with hr' ? 'hr-show' : 'hr-hidden'
            ].join(' ')">
          <div class="or">OR</div>
          <hr
            [ngClass]="[
              options.mslogin === 'with hr' ? 'hr-show' : 'hr-hidden'
            ].join(' ')">
          <img src="assets/images/image-msbtn.svg" alt="Sign in with Microsoft">
        </div>

    </form>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements AfterViewInit {
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