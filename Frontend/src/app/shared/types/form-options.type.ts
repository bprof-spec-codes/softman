import ButtonType from './button.type'
  
type FormOptionsType = {
    float: 'left' | 'right' | 'center'
    title: string
    inputs: { type: string, text: string }[]
    buttons: ButtonType[]
    mslogin?: 'with hr' | 'without hr'
    padding?: {
        between_input_button?: boolean
        large_after_last?: boolean
    }
}

export default FormOptionsType