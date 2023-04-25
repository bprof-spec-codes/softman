import { Injectable } from '@angular/core'

import {
    Config,
    LocalStorageService, ErrorHandlerService
} from 'src/app/core'

@Injectable({
    providedIn: 'root'
})
export class SoftwareApi {

    constructor(
        private storageService: LocalStorageService,
        private errorHandlerService: ErrorHandlerService
    ) { }

    getAllSoftwares() {
        const token = this.storageService.getToken()
        
        return this.errorHandlerService.wrapper(
            fetch(`${Config['base-url']}/software`, {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            res => {
                return res
            }
        )
    }

    searchSoftwares(prop: string) {
        const token = this.storageService.getToken()
        
        return this.errorHandlerService.wrapper(
            fetch(`${Config['base-url']}/software/searchsoftwares/?search=${prop}`, {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            res => {
                return res
            }
        )
    }
}