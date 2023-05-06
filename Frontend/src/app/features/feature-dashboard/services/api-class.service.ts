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
export class ClassApi extends ApiBaseService {

    constructor(
        router: Router,
        logger: LoggerService,
        storageService: LocalStorageService,
        guardUserService: GuardUserService,
        guardAdminService: GuardAdminService
    ) {
        super(router, logger, storageService, guardUserService, guardAdminService)
        this.defineBaseUrl('class')
        this.defineRole('Customer')
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

    public searchClasses(prop: string) {
        return this.wrap<IClassroomModel[]>(
            fetch(`${this.baseUrl}/searchclasses/?search=${prop}`, {
                headers: this.defineHeaders(['auth'])
            }),
            data => {
                return data
            }
        )
    }
}