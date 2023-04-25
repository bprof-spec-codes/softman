type PopUpType = {
    type: 'lg' | 'sm'
    title: string
    texts: string[]
    onNo: (e: Event) => void
    onYes?: (e: Event) => void
}

export default PopUpType