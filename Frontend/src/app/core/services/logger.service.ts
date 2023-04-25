import { Injectable } from '@angular/core'

import { Config } from '../config'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

    log(data: any) {
        if (Config.logger) {
            console.log(data)
        }
    }
}