import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
    ISoftwareClaimModel,
    ApiBaseService, LoggerService, LocalStorageService,
    GuardUserService, GuardAdminService
} from 'src/app/core'

@Injectable({
    providedIn: 'root'
})
export class ApiAdminSoftwareClaimService extends ApiBaseService {

    constructor(
        router: Router,
        logger: LoggerService,
        storageService: LocalStorageService,
        guardUserService: GuardUserService,
        guardAdminService: GuardAdminService
    ) {
        super(router, logger, storageService, guardUserService, guardAdminService)
        this.defineBaseUrl('softwareclaim')
        this.defineRole('Admin')
    }

    public getAllSoftwareClaims() {
        return this.wrap<ISoftwareClaimModel[]>(
            fetch(this.baseUrl, {
                headers: this.defineHeaders(['auth'])
            }),
            data => {
                return data
            }
        )
    }

    public updateSoftwareClaims(claim: ISoftwareClaimModel) {
        return this.wrap<ISoftwareClaimModel>(
            fetch(this.baseUrl, {
                method: 'put',
                headers: this.defineHeaders(['content-json', 'auth']),
                body: JSON.stringify(claim)
            }),
            data => {
                return data
            }
        )
    }

    public searchSoftwareClaims(prop: string) {
        return this.wrap<ISoftwareClaimModel[]>(
            fetch(`${this.baseUrl}/searchsoftwareclaims/?search=${prop}`, {
                headers: this.defineHeaders(['auth'])
            }),
            data => {
                return data
            }
        )
    }
}