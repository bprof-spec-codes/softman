import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
    ISoftwareModel,
    ApiBaseService, LoggerService, LocalStorageService,
    GuardUserService, GuardAdminService
} from 'src/app/core'

@Injectable({
    providedIn: 'root'
})
export class ApiUserSoftwareService extends ApiBaseService {

    constructor(
        router: Router,
        logger: LoggerService,
        storageService: LocalStorageService,
        guardUserService: GuardUserService,
        guardAdminService: GuardAdminService
    ) {
        super(router, logger, storageService, guardUserService, guardAdminService)
        this.defineBaseUrl('software')
        this.defineRole('Customer')
    }

    public getAllSoftwares() {
        return this.wrap<ISoftwareModel[]>(
            fetch(this.baseUrl, {
                headers: this.defineHeaders(['auth'])
            }),
            data => {
                return data
            }
        )
    }

    /*
    public addSoftware(software: ISoftwareModel) {
        return this.wrap<ISoftwareModel>(
            fetch(this.baseUrl, {
                method: 'post',
                headers: this.defineHeaders(['content-json', 'auth']),
                body: JSON.stringify(software)
            }),
            data => {
                return data
            }
        )
    }
    */

    public addSoftware(software: ISoftwareModel) {
        const data = new FormData()
        Object.entries(software).map(entry => {
            const [key, value] = entry
            data.append(key, key === 'size' ? Number(value) : value)
        })
        return this.wrap<ISoftwareModel>(
            fetch(`${this.baseUrl}/createsoftwarefromsoftwareviewmodel`, {
                method: 'post',
                headers: this.defineHeaders(['auth']),
                body: data
            }),
            data => {
                return data
            }
        )
    }

    public searchSoftwares(prop: string) {
        return this.wrap<ISoftwareModel[]>(
            fetch(`${this.baseUrl}/searchsoftwares/?search=${prop}`, {
                headers: this.defineHeaders(['auth'])
            }),
            data => {
                return data
            }
        )
    }
}