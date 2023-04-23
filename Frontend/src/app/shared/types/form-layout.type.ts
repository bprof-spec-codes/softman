import FormOptionsType from './form-options.type'

type FormLayoutType = {
    panel: FormOptionsType
    background?: {
        src: string
        float: 'left' | 'right'
    }
}

export default FormLayoutType