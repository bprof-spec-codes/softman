import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
    IClassroomModel,
    ApiBaseService, LoggerService, LocalStorageService,
    GuardUserService, GuardAdminService
} from 'src/app/core'

@Injectable({
    providedIn: 'root'
})
export class ApiAdminClassService extends ApiBaseService {

    constructor(
        router: Router,
        logger: LoggerService,
        storageService: LocalStorageService,
        guardUserService: GuardUserService,
        guardAdminService: GuardAdminService
    ) {
        super(router, logger, storageService, guardUserService, guardAdminService)
        this.defineBaseUrl('class')
        this.defineRole('Admin')
    }

    public getAllClass() {
        return this.wrap<IClassroomModel[]>(
            fetch(this.baseUrl, {
                headers: this.defineHeaders(['auth'])
            }),
            data => {
                return data
            }
        )
    }
}