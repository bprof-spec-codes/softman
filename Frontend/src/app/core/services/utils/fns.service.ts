import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FNSService {

    nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    public isNumeric(value: string): boolean {
        let result = true
        value.split('').map(c => {
            if (!this.nums.find(n => n === c)) {
                result = false
            }
        })
        return result
    }
}