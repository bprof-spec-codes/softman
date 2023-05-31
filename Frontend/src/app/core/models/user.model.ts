import { RoleType } from '../types'

interface IUserModel {
    id?: string
    roles?: RoleType[]
    email?: string
    userName?: string
    firstName?: string
    lastName?: string
    password: string
    passwordAgain?: string
}

export default IUserModel