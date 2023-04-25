import { Injectable } from '@angular/core'

import { LoggerService } from './logger.service'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

    constructor(
        private logger: LoggerService,
        private storageService: LocalStorageService
    ) { }

    async wrapper(request: Promise<Response>, callback: (res: any) => any): Promise<Object> {
        let result = undefined
        
        try {
            const res = await request
            if (res.ok) {
                const data = await res.json()
                this.logger.log('SUCCESS')
                this.logger.log(data)
                result = callback(data)
            }
            else {
                if (res.status === 401) {
                    this.storageService.clear()
                }

                throw new Error(res.statusText)
            }
        }
        catch(error) {
            this.logger.log('ERROR')
            this.logger.log(error)
        }

        return result
    }
}