import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ISoftwareModel, IClassroomModel } from 'src/app/core';
import { PopUpType } from 'src/app/shared';

import {
    ApiUserClassService,
    ApiUserSoftwareService,
    ApiUserSoftwareClaimService
} from '../../services';

import { ImgJetpackGuy } from 'src/assets';

@Component({
  selector: 'app-page-request-softwares',
  templateUrl: './page-request-softwares.component.html',
  styleUrls: ['./page-request-softwares.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageRequestSoftwaresComponent {
    imgJetpackGuy = ImgJetpackGuy

    softwareClaims: ISoftwareModel[] = []
    softwares: ISoftwareModel[] = []
    classrooms: IClassroomModel[] = []
    classroom_data_before?: IClassroomModel
    hasRequest?: boolean
    selectedClassroom?: string

    searchBars = { software: '', class: '' }
    popup: PopUpType | undefined = undefined

    constructor(
        private router: Router,
        private apiUserClassService: ApiUserClassService,
        private apiUserSoftwareService: ApiUserSoftwareService,
        private apiUserSoftwareClaimService: ApiUserSoftwareClaimService
    ) {
        this.loadClasses()
        this.loadSoftwares()
    }

    async loadClasses() {
        this.classrooms = await this.apiUserClassService.getAllClass()
        this.setSelectedClassroom(this.classrooms[0].id)
    }

    async loadSoftwares() {
        this.softwares = await this.apiUserSoftwareService.getAllSoftwares()
    }

    async searchSoftwares() {
        this.softwares = await this.apiUserSoftwareService.searchSoftwares(this.searchBars.software)
    }

    async searchClasses() {
        this.classrooms = await this.apiUserClassService.searchClasses(this.searchBars.class)
        this.setSelectedClassroom(this.classrooms[0].id)
    }

    async claimSoftware() {
        if (this.softwareClaims.length > 0 && this.selectedClassroom) {
            await this.apiUserSoftwareClaimService.claimSoftware(this.selectedClassroom, this.softwareClaims[0].id)
            this.hasRequest = true
            this.softwareClaims = []
        }        
    }

    onSearchBarChange(e: Event) {
        const { name, value } = e.target as HTMLInputElement
        this.searchBars = {...this.searchBars, [name]: value}
    }

    onClear(type: 'software' | 'class') {
        switch (type) {
            case 'software':
                this.searchBars = {...this.searchBars, software: ''}
                this.loadSoftwares()
                break

            case 'class':
                this.searchBars = {...this.searchBars, class: ''}
                this.loadClasses()
                break
        }
    }

    addSoftwareClaim(softwareSerialized: string) {
        if (!this.hasRequest && this.classroom_data_before) {
            this.classrooms = this.classrooms.map(x => x.id === this.selectedClassroom ? this.classroom_data_before! : x)
        }

        const software = JSON.parse(softwareSerialized) as ISoftwareModel
        const classroom = this.classrooms.find(x => x.id === this.selectedClassroom)!
        const storageAfter = classroom.storageCapacity - Math.round(software.size / 1024 * 100) / 100

        if (storageAfter >= 0) {
            this.popup = {
                type: 'lg',
                title: 'Are you sure to claim this software?',
                texts: [
                    `Software size: ${software.size} MB`,
                    `Storage after added software: ${storageAfter} GB`
                ],
                onYes: (e) => {
                    this.softwareClaims = [software]

                    /*
                    this.classrooms = this.classrooms.map(x => x.id === this.selectedClassroom
                        ? {...x, storageCapacity: storageAfter} : x)
                    */

                    this.popup = undefined
                },
                onNo: (e) => {
                    this.popup = undefined
                }
            }
        }
        else {
            this.popup = {
                type: 'sm',
                title: 'This is not enough storage.',
                texts: [],
                onNo: (e) => { this.popup = undefined }
            }
        }
    }

    getSelectedClassroom(prop: 'roomNumber' | 'storageCapacity') {
        const found = this.classrooms?.find(x => x.id === this.selectedClassroom)
        return found ? found[prop] : prop === 'roomNumber' ? 'AA.00.00' : '0'
    }

    setSelectedClassroom(id: string) {
        if (!this.hasRequest && this.classroom_data_before) {
            this.classrooms = this.classrooms.map(x => x.id === this.selectedClassroom ? this.classroom_data_before! : x)
        }
        this.selectedClassroom = id
        this.softwareClaims = []
        this.classroom_data_before = this.classrooms.find(x => x.id === id)
        this.hasRequest = false
    }

    redirectToAddSoftware() {
        this.router.navigate(['dashboard/add-software'])
    }

    /*
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
    ]*/
}