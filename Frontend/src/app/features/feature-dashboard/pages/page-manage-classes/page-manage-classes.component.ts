import { Component, ViewEncapsulation } from '@angular/core';

import { IClassroomModel } from 'src/app/core';

@Component({
  selector: 'app-page-manage-classes',
  templateUrl: './page-manage-classes.component.html',
  styleUrls: ['./page-manage-classes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageManageClassesComponent {
    freeClasses: IClassroomModel[] = [
        {
            id: 'casd1',
            roomNumber: 'BA.01.15',
            storageCapacity: 15
        },
        {
            id: 'casd2',
            roomNumber: 'BA.01.16',
            storageCapacity: 12
        },
        {
            id: 'casd3',
            roomNumber: 'BA.01.17',
            storageCapacity: 15
        },
        {
            id: 'casd4',
            roomNumber: 'BA.01.18',
            storageCapacity: 18
        }
    ]


    myClasses: IClassroomModel[] = [
        {
            id: 'casd5',
            roomNumber: 'BA.01.19',
            storageCapacity: 10
        },
        {
            id: 'casd6',
            roomNumber: 'BA.01.20',
            storageCapacity: 15
        }
    ]
}