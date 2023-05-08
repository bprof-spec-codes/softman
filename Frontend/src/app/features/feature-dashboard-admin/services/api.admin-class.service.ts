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

    public addClass(classroom: IClassroomModel) {
        return this.wrap<IClassroomModel>(
            fetch(this.baseUrl, {
                method: 'post',
                headers: this.defineHeaders(['content-json', 'auth']),
                body: JSON.stringify(classroom)
            }),
            data => {
                return data
            }
        )
    }

    public updateClass(classroom: IClassroomModel) {
        return this.wrap<IClassroomModel>(
            fetch(this.baseUrl, {
                method: 'put',
                headers: this.defineHeaders(['content-json', 'auth']),
                body: JSON.stringify(classroom)
            }),
            data => {
                return data
            }
        )
    }

    public deleteClass(id: string) {
        return this.wrap<IClassroomModel>(
            fetch(`${this.baseUrl}/${id}`, {
                method: 'delete',
                headers: this.defineHeaders(['auth'])
            }),
            data => {
                return data
            }
        )
    }
}