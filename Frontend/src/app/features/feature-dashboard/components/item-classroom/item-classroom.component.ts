import { Component, Input } from '@angular/core';

import { IClassroomModel } from 'src/app/core';

@Component({
  selector: 'app-item-classroom',
  styleUrls: ['./item-classroom.component.scss'],
  template: `
    <div class="item-classroom">
        <span class="name">{{classroom.roomNumber}}</span>
    </div>
  `
})
export class ItemClassroomComponent {
    @Input() classroom!: IClassroomModel
}