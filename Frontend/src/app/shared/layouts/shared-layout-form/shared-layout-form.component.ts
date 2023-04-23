import { Component, Input, ViewEncapsulation } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

@Component({
  selector: 'app-shared-layout-form',
  styleUrls: ['./shared-layout-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="layout-form">
      <img
        *ngIf="props.background"
        [ngClass]="[
          'img-bg',
          props.background.float === 'left' ? 'img-bg-left' : 'img-bg-right'
        ].join(' ')"
        [src]="'assets/images/' + props.background.src"
        alt="Background image"
      >
      <app-shared-backgound-panel></app-shared-backgound-panel>
      <div class="poly-bg"></div>
      <app-shared-form [options]="props.panel"></app-shared-form>
    </div>
  `
})
export class SharedLayoutFormComponent {
  @Input() props!: FormLayoutType

}