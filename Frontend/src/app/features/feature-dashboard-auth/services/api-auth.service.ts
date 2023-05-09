import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
    IAuthModel,
    ApiBaseService, LoggerService, LocalStorageService,
    GuardUserService, GuardAdminService
} from 'src/app/core'

import { UserType } from '../types'

@Injectable({
    providedIn: 'root'
})
export class ApiAuthService extends ApiBaseService {
    
    constructor(
        router: Router,
        logger: LoggerService,
        storageService: LocalStorageService,
        guardUserService: GuardUserService,
        guardAdminService: GuardAdminService
    ) {
        super(router, logger, storageService, guardUserService, guardAdminService)
        this.defineBaseUrl('auth')
        this.defineRole('None')
    }

    public login(payload: UserType) {
        return this.wrap<IAuthModel>(
            fetch(this.baseUrl, {
                method: 'post',
                headers: this.defineHeaders(['content-json']),
                body: JSON.stringify(payload)
            }),
            data => {
                this.storageService.setAuthModel(data)
                this.router.navigate(['dashboard/request-softwares'])
                return data
            }
        )
    }

    public register(payload: UserType) {
        payload.userName = payload.email
        delete payload.passwordAgain
        return this.wrap<any>(
            fetch(this.baseUrl, {
                method: 'put',
                headers: this.defineHeaders(['content-json']),
                body: JSON.stringify(payload)
            }),
            data => {
                this.router.navigate(['auth/login'])
                return data
            },
            true
        )
    }
}