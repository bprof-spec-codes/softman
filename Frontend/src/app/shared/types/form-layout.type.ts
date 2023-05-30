import { ImageType } from 'src/app/core'
import FormOptionsType from './form-options.type'

type FormLayoutType = {
    panel: FormOptionsType
    background?: {
        img: ImageType
        // float: 'left' | 'right'
    }
}

export default FormLayoutType