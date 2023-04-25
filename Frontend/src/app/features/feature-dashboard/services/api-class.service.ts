import { Injectable } from '@angular/core'

import {
    Config,
    LocalStorageService, ErrorHandlerService
} from 'src/app/core'

@Injectable({
    providedIn: 'root'
})
export class ClassApi {

    constructor(
        private storageService: LocalStorageService,
        private errorHandlerService: ErrorHandlerService
    ) { }

    getAllClass() {
        const token = this.storageService.getToken()
        
        return this.errorHandlerService.wrapper(
            fetch(`${Config['base-url']}/class`, {
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

    searchClasses(prop: string) {
        const token = this.storageService.getToken()
        
        return this.errorHandlerService.wrapper(
            fetch(`${Config['base-url']}/class/searchclasses/?search=${prop}`, {
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