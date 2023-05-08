import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button-circle',
  styleUrls: ['./shared-button-circle.component.scss'],
  template: `
    <button [ngClass]="getStyle">{{ getValue }}</button>
  `
})
export class SharedButtonCircleComponent {
  @Input() value: boolean = false
  @Input() isActive: boolean = true

  get getValue() {
    return this.value ? '✓' : '☓'
  }

  get getStyle() {
    return this.isActive ? '' : 'inactive'
  }
}