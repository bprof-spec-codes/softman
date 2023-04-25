import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IClassroomModel } from 'src/app/core';

@Component({
  selector: 'app-shared-item-classroom',
  styleUrls: ['./shared-item-classroom.component.scss'],
  template: `
    <div class="item-classroom" [ngClass]="selected()" (click)="onSelect()">
        <span class="name">{{classroom.roomNumber}}</span>
    </div>
  `
})
export class SharedItemClassroomComponent {
    @Input() classroom!: IClassroomModel
    @Input() isSelected: boolean = false
    @Output() select: EventEmitter<any> = new EventEmitter()

    selected() {
      return this.isSelected ? 'item-classroom-selected' : ''
    }

    onSelect() {
      this.select.emit(this.classroom.id)
    }
}