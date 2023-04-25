import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-bar-search',
  styleUrls: ['./shared-bar-search.component.scss'],
  template: `
    <input type="text" [name]="name" [value]="value" (change)="onChange($event)" placeholder="Search...">
  `
})
export class SharedBarSearchComponent {
  @Input() name: string = ''
  @Input() value: string = ''
  @Output() textChange: EventEmitter<any> = new EventEmitter()

  onChange(e: Event) {
    this.textChange.emit(e)
  }
}