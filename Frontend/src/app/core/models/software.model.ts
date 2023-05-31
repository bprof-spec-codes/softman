interface ISoftwareModel {
    id: string
    name: string
    versionNumber: string
    size: number
    pictureData: string
    pictureContentType: string
    imageFile?: File
}

export default ISoftwareModel