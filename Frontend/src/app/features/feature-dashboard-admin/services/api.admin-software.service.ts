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
export class ApiAdminSoftwareService extends ApiBaseService {

    constructor(
        router: Router,
        logger: LoggerService,
        storageService: LocalStorageService,
        guardUserService: GuardUserService,
        guardAdminService: GuardAdminService
    ) {
        super(router, logger, storageService, guardUserService, guardAdminService)
        this.defineBaseUrl('software')
        this.defineRole('Admin')
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
}