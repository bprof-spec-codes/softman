import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { FormLayoutType } from 'src/app/shared';
import { UserType } from '../../types';

import { ImgLogin } from 'src/assets';

import { AuthService } from '../../services';

@Component({
  selector: 'app-page-login',
  styles: [],
  template: `
    <div class="page-login">
      <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
    </div>    
  `
})
export class PageLoginComponent {

  user: UserType = { password: '', userName: '' }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  formProps: FormLayoutType = {
    background: {
      float: 'left',
      img: ImgLogin
    },
    panel: {
      float: 'right',
      title: 'Login',
      inputs: [
        {
          type: 'text', text: 'Email address',
          value: this.user.userName, name: 'userName',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'password', text: 'Password',
          value: this.user.password, name: 'password',
          onChange: this.onInputChange.bind(this)
        }
      ],
      buttons: [
        {
          display: 'inline-left', type: 'filled', text: 'Login',
          onClick: this.onLoginClick.bind(this)
        },
        {
          display: 'inline-right', type: 'outlined', text: 'Sign up',
          onClick: this.onSignUpClick.bind(this)
        }
      ],
      mslogin: 'with hr'
    }
  }

  onLoginClick(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    this.authService.login(this.user)
  }

  onSignUpClick(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    this.router.navigate(['auth/register'])
  }

  onInputChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement
    this.user = {...this.user, [name]: value}
  }
}