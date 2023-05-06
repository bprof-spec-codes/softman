import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
    ApiBaseService, LoggerService, LocalStorageService,
    GuardUserService, GuardAdminService
} from 'src/app/core'

@Injectable({
    providedIn: 'root'
})
export class SoftwareClaimApi extends ApiBaseService {

    constructor(
        router: Router,
        logger: LoggerService,
        storageService: LocalStorageService,
        guardUserService: GuardUserService,
        guardAdminService: GuardAdminService
    ) {
        super(router, logger, storageService, guardUserService, guardAdminService)
        this.defineBaseUrl('softwareclaim')
        this.defineRole('Customer')
    }

    public claimSoftware(classroomId: string, softwareId: string) {
        return this.wrap(
            fetch(this.baseUrl, {
                method: 'post',
                headers: this.defineHeaders(['content-json', 'auth']),
                body: JSON.stringify({
                    classRoomId: classroomId,
                    softwareId: softwareId
                })
            }),
            data => {
                return data
            }
        )
    }
}