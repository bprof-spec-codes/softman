import { Component, Input, ViewEncapsulation } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

@Component({
  selector: 'app-shared-layout-form',
  styleUrls: ['./shared-layout-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="layout-form">
      <div class="poly-bg"></div>
      <img
        *ngIf="props.background"
        [ngClass]="[
          'img-bg',
          props.background.float === 'left' ? 'img-bg-left' : 'img-bg-right'
        ].join(' ')"
        [src]="props.background.img.src"
        [alt]="props.background.img.alt"
      >
      <app-shared-panel-background/>
      <app-shared-form [options]="props.panel"/>
    </div>
  `
})
export class SharedLayoutFormComponent {
  @Input() props!: FormLayoutType

}