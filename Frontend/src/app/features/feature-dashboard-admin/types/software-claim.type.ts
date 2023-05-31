import { IUserModel, ISoftwareModel, ISoftwareClaimModel } from 'src/app/core'

type SoftwareClaimType = {
    user?: IUserModel
    software: ISoftwareModel
    claim: ISoftwareClaimModel
}

export default SoftwareClaimType