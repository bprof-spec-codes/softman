import { ISoftwareModel, ISoftwareClaimModel, IUserModel } from 'src/app/core'

type SoftwareClaimType = {
    software: ISoftwareModel
    claim: ISoftwareClaimModel
    user: IUserModel
}

export default SoftwareClaimType