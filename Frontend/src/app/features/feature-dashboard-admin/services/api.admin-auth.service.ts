import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
    IUserModel,
    ApiBaseService, LoggerService, LocalStorageService,
    GuardUserService, GuardAdminService
} from 'src/app/core'

@Injectable({
    providedIn: 'root'
})
export class ApiAdminAuthService extends ApiBaseService {
    
    constructor(
        router: Router,
        logger: LoggerService,
        storageService: LocalStorageService,
        guardUserService: GuardUserService,
        guardAdminService: GuardAdminService
    ) {
        super(router, logger, storageService, guardUserService, guardAdminService)
        this.defineBaseUrl('auth')
        this.defineRole('Admin')
    }

    public getAllUsers() {
        return this.wrap<IUserModel[]>(
            fetch(`${this.baseUrl}/getalluser`, {
                headers: this.defineHeaders(['auth'])
            }),
            data => {
                return data
            }
        )
    }
}