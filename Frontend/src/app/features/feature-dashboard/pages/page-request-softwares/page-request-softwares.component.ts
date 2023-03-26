import { Component, ViewEncapsulation } from '@angular/core';

import { ISoftwareModel, IClassroomModel } from 'src/app/core/models';

@Component({
  selector: 'app-page-request-softwares',
  templateUrl: './page-request-softwares.component.html',
  styleUrls: ['./page-request-softwares.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageRequestSoftwaresComponent {
    softwares: ISoftwareModel[] = [
        {
            id: 'asd1',
            name: 'Word',
            size: 450,
            versionNumber: '1.0'
        },
        {
            id: 'asd2',
            name: 'Visual Studio 2022',
            size: 950,
            versionNumber: '4.0'
        },
        {
            id: 'asd3',
            name: 'Matlab',
            size: 1010,
            versionNumber: '3.0'
        },
        {
            id: 'asd4',
            name: 'Visual Studio Code',
            size: 800,
            versionNumber: '3.0'
        },
        {
            id: 'asd5',
            name: 'VMware Workstation Pro',
            size: 1200,
            versionNumber: '1.4'
        }
    ]

    classrooms: IClassroomModel[] = [
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
        },
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