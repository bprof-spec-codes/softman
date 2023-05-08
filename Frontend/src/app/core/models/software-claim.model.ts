interface ISoftwareClaimModel {
    id: string
    softwareId: string
    classRoomId: string
    appUserId: string
    status: number
    claimDate: Date
}

export default ISoftwareClaimModel