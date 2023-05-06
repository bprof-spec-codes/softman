import { Injectable } from '@angular/core'

import { Config } from '../config'
import { AuthModel } from '../models'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    public setAuthModel(authModel: AuthModel) {
        localStorage.setItem(Config['auth-key'], JSON.stringify(authModel))
    }

    public getAuthModel(): AuthModel | null {
        const token = localStorage.getItem(Config['auth-key'])
        return token === null ? null : JSON.parse(localStorage.getItem(Config['auth-key'])!)
    }

    public clear(){
        localStorage.removeItem(Config['auth-key'])
    }
}