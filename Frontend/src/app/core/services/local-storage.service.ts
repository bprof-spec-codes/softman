import { Injectable } from '@angular/core'

import { Config } from '../config'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    setToken(token: string) {
        localStorage.setItem(Config['token-key'], token)
    }

    getToken(){
        return localStorage.getItem(Config['token-key'])
    }

    clear(){
        localStorage.clear()
    }
}