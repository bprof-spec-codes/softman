import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-button-circle',
  styleUrls: ['./page-button-circle.component.scss'],
  template: `
    <button [ngClass]="getStyle">{{ getValue }}</button>
  `
})
export class PageButtonCircleComponent {
  @Input() value: boolean = false
  @Input() isActive: boolean = true

  get getValue() {
    return this.value ? '✓' : '☓'
  }

  get getStyle() {
    return this.isActive ? '' : 'inactive'
  }
}