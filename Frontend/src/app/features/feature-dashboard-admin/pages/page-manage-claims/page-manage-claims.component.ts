import { Component, ViewEncapsulation } from '@angular/core';

import {
  ApiAdminClassService,
  ApiAdminSoftwareClaimService,
  ApiAdminSoftwareService
} from '../../services'

import { IClassroomModel, ISoftwareClaimModel, ISoftwareModel } from 'src/app/core'
import { SoftwareClaimType } from '../../types'

import { ImgWebDevelopment } from 'src/assets'

@Component({
  selector: 'app-page-manage-claims',
  styleUrls: ['./page-manage-claims.component.scss'],
  templateUrl: './page-manage-claims.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageManageClaimsComponent {
  imgWebDevelopment = ImgWebDevelopment

  classrooms: IClassroomModel[] = []
  softwares: ISoftwareModel[] = []
  softwareClaims: ISoftwareClaimModel[] = []
  vm_softwareClaims: SoftwareClaimType[] = []
  selectedClassroom?: string

  searchBars = { claims: '' }

  constructor(
    private apiAdminClassService: ApiAdminClassService,
    private apiAdminSoftwareClaimService: ApiAdminSoftwareClaimService,
    private apiAdminSoftwareService: ApiAdminSoftwareService
  ) {
    this.loadClasses()
    this.loadSoftwares()
    this.loadSoftwareClaims()
  }

  async loadClasses() {
    this.classrooms = await this.apiAdminClassService.getAllClass()
  }

  async loadSoftwares() {
    this.softwares = await this.apiAdminSoftwareService.getAllSoftwares()
  }

  async loadSoftwareClaims() {
    this.softwareClaims = await this.apiAdminSoftwareClaimService.getAllSoftwareClaims()
  }

  async filterSoftwareClaims() {
    const softwareClaims_filtered = this.softwareClaims.filter(x => x.classRoomId === this.selectedClassroom)
    softwareClaims_filtered.map(claim => {
      const software = this.softwares.find(x => x.id === claim.softwareId)
      if (software) {
        this.vm_softwareClaims.push({ claim, software })
      }
    })
  }

  onSearchBarChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement
    this.searchBars = {...this.searchBars, [name]: value}
  }

  setSelectedClassroom(id: string) {
    this.selectedClassroom = id
    this.vm_softwareClaims = []
    this.filterSoftwareClaims()
  }

}