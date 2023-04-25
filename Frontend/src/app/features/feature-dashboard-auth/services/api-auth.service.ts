import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
    Config,
    LocalStorageService, ErrorHandlerService
} from 'src/app/core'

import { UserType, AuthResponseType } from '../types'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(
        private router: Router,
        private storageService: LocalStorageService,
        private errorHandlerService: ErrorHandlerService
    ) {}

    login(payload: UserType) {
        return this.errorHandlerService.wrapper(
            fetch(`${Config['base-url']}/auth`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            }),
            res => {
                const data = res as AuthResponseType
                this.storageService.setToken(data.token)
                this.router.navigate(['dashboard/request-softwares'])
            }
        )
    }
}