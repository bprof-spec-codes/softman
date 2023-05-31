import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'

import {
  ApiAdminClassService,
  ApiAdminSoftwareClaimService,
  ApiAdminSoftwareService,
  ApiAdminAuthService
} from '../../services'

import { IClassroomModel, ISoftwareClaimModel, ISoftwareModel, IUserModel } from 'src/app/core'
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

  users: IUserModel[] = []
  classrooms: IClassroomModel[] = []
  softwares: ISoftwareModel[] = []
  softwareClaims: ISoftwareClaimModel[] = []
  vm_softwareClaims: SoftwareClaimType[] = []
  selectedClassroom?: string

  searchBars = { claims: '' }

  constructor(
    public router: Router,
    private apiAdminClassService: ApiAdminClassService,
    private apiAdminSoftwareClaimService: ApiAdminSoftwareClaimService,
    private apiAdminSoftwareService: ApiAdminSoftwareService,
    private apiAdminAuthService: ApiAdminAuthService
  ) {
    this.loadUsers()
    this.loadClasses()
    this.loadSoftwares()
    this.loadSoftwareClaims()
  }

  private addSoftwareToClaim(filtered: ISoftwareClaimModel[]) {
    this.vm_softwareClaims = []
    filtered.map(claim => {
      const software = this.softwares.find(x => x.id === claim.softwareId)
      const user = this.users.find(x => x.id == claim.appUserId)
      if (software) {
        this.vm_softwareClaims.push({ claim, software, user })
      }
    })
  }

  async loadUsers() {
    this.users = (await this.apiAdminAuthService.getAllUsers()).body
  }

  async loadClasses() {
    this.classrooms = (await this.apiAdminClassService.getAllClass()).body
  }

  async loadSoftwares() {
    this.softwares = (await this.apiAdminSoftwareService.getAllSoftwares()).body
  }

  async loadSoftwareClaims() {
    this.softwareClaims = (await this.apiAdminSoftwareClaimService.getAllSoftwareClaims()).body
  }

  async filterSoftwareClaims() {
    const softwareClaims_filtered = this.softwareClaims.filter(x => x.classRoomId === this.selectedClassroom)
    this.addSoftwareToClaim(softwareClaims_filtered)
  }

  async searchSoftwareClaims() {
    const softwareClaims_filtered = await (await this.apiAdminSoftwareClaimService.searchSoftwareClaims(this.searchBars.claims)).body
    this.addSoftwareToClaim(softwareClaims_filtered)
  }

  async updateSoftwareClaim(args: { claim: ISoftwareClaimModel, status: number }) {
    const claim = { ...args.claim, status: args.status }
    const softwareClaim = await (await this.apiAdminSoftwareClaimService.updateSoftwareClaims(claim)).body
    this.softwareClaims = this.softwareClaims.map(x => x.id === claim.id ? softwareClaim : x)
    this.vm_softwareClaims = this.vm_softwareClaims.map(x => x.claim.id === claim.id ? { claim: softwareClaim, software: x.software, user: x.user } : x)
  }

  async deleteClassroom(id: string) {
    const classroom = await (await this.apiAdminClassService.deleteClass(id)).body
    this.classrooms = this.classrooms.filter(x => x.id !== classroom.id)
    this.vm_softwareClaims = []
  }

  onSearchBarChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement
    this.searchBars = {...this.searchBars, [name]: value}
  }

  onClear() {
    this.searchBars = { claims: '' }
    this.loadClasses()
    this.loadSoftwares()
    this.loadSoftwareClaims()
    this.vm_softwareClaims = []
  }

  setSelectedClassroom(id: string) {
    this.selectedClassroom = id
    this.filterSoftwareClaims()
  }

}