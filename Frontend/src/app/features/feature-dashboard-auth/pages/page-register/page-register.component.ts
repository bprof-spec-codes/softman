import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';
import { UserType } from '../../types';

import { ApiAuthService } from '../../services';

import { ImgRegisterWelcome } from 'src/assets';

@Component({
  selector: 'app-page-register',
  styles: [],
  template: `
    <div class="page-register">
      <app-shared-layout-form [props]="formProps"/>
    </div>
  `
})
export class PageRegisterComponent {

  user: UserType = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordAgain: ''
  }

  constructor(
    private apiAuthService: ApiAuthService
  ) { }

  formProps: FormLayoutType = {
    background: {
      float: 'left',
      img: ImgRegisterWelcome
    },
    panel: {
      float: 'right',
      title: 'Register',
      inputs: [
        {
          type: 'text', text: 'Email address',
          value: this.user.email!, name: 'email',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'text', text: 'First name',
          value: this.user.firstName!, name: 'firstName',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'text', text: 'Last name',
          value: this.user.lastName!, name: 'lastName',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'password', text: 'Password',
          value: this.user.password, name: 'password',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'password', text: 'Password again',
          value: this.user.passwordAgain!, name: 'passwordAgain',
          onChange: this.onInputChange.bind(this)
        }
      ],
      buttons: [
        {
          display: 'block-normal', type: 'filled', text: 'Sign up',
          onClick: this.onRegisterClick.bind(this)
        }
      ],
      padding: {
        large_after_last: true
      }
    }
  }

  onRegisterClick(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    this.apiAuthService.register(this.user)
  }

  onInputChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement
    this.user = {...this.user, [name]: value}
  }
}