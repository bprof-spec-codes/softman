import { Component, Input, ViewEncapsulation } from '@angular/core';

import { PopUpType } from '../../types'

@Component({
  selector: 'app-shared-pop-up',
  styleUrls: ['./shared-pop-up.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="pop-up" [ngClass]="getClass()">
        <span class="title">{{ props.title }}</span>
        <div class="text-wrapper">
          <span
            *ngFor="let text of props.texts"
            class="text"
          >{{ text }}</span>
        </div>   
        <div class="btn-wrapper">
            <app-shared-button-circle
              *ngIf="props.onYes"
              [value]="true"
              (click)="props.onYes($event)"
            ></app-shared-button-circle>
            <app-shared-button-circle (click)="props.onNo($event)"></app-shared-button-circle>
        </div>
    </div>
  `
})
export class SharedPopUpComponent {
    @Input() props!: PopUpType

    getClass() {
      return this.props.type === 'lg' ? 'pop-up-lg' : 'pop-up-sm'
    }
}