import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button-circle',
  styleUrls: ['./shared-button-circle.component.scss'],
  template: `
    <button>{{ getValue() }}</button>
  `
})
export class SharedButtonCircleComponent {
  @Input() value: boolean = false

  getValue() {
    return this.value ? '✓' : '☓'
  }
}