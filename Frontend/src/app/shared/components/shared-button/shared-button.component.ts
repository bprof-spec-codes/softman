import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  styleUrls: ['./shared-button.component.scss'],
  template: `
    <button>{{text}}</button>
  `
})
export class SharedButtonComponent {
  @Input() text: string = ''
}