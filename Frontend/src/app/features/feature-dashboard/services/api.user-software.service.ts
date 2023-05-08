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