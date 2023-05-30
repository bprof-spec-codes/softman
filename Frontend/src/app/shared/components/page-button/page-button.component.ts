import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-button',
  styleUrls: ['./page-button.component.scss'],
  template: `
    <button
      [ngClass]="[type, classLayer].join(' ')"
    >{{text}}</button>
  `
})
export class PageButtonComponent {
  @Input() text: string = ''
  @Input() type: 'filled' | 'outlined' = 'filled'
  @Input() classLayer: string = ''
}