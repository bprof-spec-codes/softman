import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import {
    Config,
    LocalStorageService, LoggerService
} from 'src/app/core'

import { UserType, AuthResponseType } from '../types'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(
        private router: Router,
        private storageService: LocalStorageService,
        private logger: LoggerService
    ) {}

    login(payload: UserType) {
        fetch(`${Config['base-url']}/auth`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (res.ok) {
                res.json().then(raw => {
                    const data = raw as AuthResponseType
                    this.logger.log(data)
                    this.storageService.setToken(data.token)
                    this.router.navigate(['dashboard/request-softwares'])
                })
            } else {
                throw new Error(res.statusText)
            }
        })
        .catch(error => {
            this.logger.log(error)
        })
    }
}