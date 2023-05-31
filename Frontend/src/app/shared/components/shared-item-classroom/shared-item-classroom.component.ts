import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { IClassroomModel } from 'src/app/core';

import { ImgShapeTrianglePurple } from 'src/assets'

@Component({
  selector: 'app-shared-item-classroom',
  styleUrls: ['./shared-item-classroom.component.scss'],
  template: `
    <div
      *ngIf="
        !isExtended
        else extended
      "
      class="item-classroom"
      [ngClass]="selected()"
      (click)="onSelect()"
    >
      <span class="name">{{classroom.roomNumber}}</span>       
    </div>
    <ng-template #extended>
      <div
        class="item-classroom item-classroom-max"
        [ngClass]="selected()"
      >
        <span class="name">{{classroom.roomNumber}}</span>
        <img [src]="imgShapeTrianglePurple.src" [alt]="imgShapeTrianglePurple.alt" (click)="onSelect()" [ngClass]="[
          isSelected ? 'img-rotate' : ''
        ].join(' ')">
        <button class="btn" (click)="onDelete()">Delete class</button>
        <button
          class="btn"
          (click)="router.navigate(['admin/edit-class', {
            id: classroom.id, classnumber: classroom.roomNumber, size: classroom.storageCapacity
          }])"
        >Edit class</button>   
      </div>
    </ng-template>
  `
})
export class SharedItemClassroomComponent {
    imgShapeTrianglePurple = ImgShapeTrianglePurple

    @Input() classroom!: IClassroomModel
    @Input() isSelected: boolean = false
    @Input() isExtended: boolean = false
    @Output() select: EventEmitter<any> = new EventEmitter()
    @Output() delete: EventEmitter<any> = new EventEmitter()

    constructor(
      public router: Router
    ) { }

    selected() {
      return this.isSelected ? 'item-classroom-selected' : ''
    }

    max() {
      return this.isExtended ? 'item-classroom-max' : ''
    }

    onSelect() {
      this.select.emit(this.classroom.id)
    }

    onDelete() {
      this.delete.emit(this.classroom.id)
    }
}