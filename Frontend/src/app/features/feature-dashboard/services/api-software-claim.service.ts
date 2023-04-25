import { Injectable } from '@angular/core'

import {
    Config,
    LocalStorageService, ErrorHandlerService
} from 'src/app/core'

@Injectable({
    providedIn: 'root'
})
export class SoftwareClaimApi {

    constructor(
        private storageService: LocalStorageService,
        private errorHandlerService: ErrorHandlerService
    ) { }

    claimSoftware(classroomId: string, softwareId: string) {
        const token = this.storageService.getToken()
        
        return this.errorHandlerService.wrapper(
            fetch(`${Config['base-url']}/softwareclaim`, {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    classRoomId: classroomId,
                    softwareId: softwareId
                })
            }),
            res => {
                return res
            }
        )
    }
}