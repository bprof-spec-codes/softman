import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { IUserModel } from 'src/app/core'
import { FormLayoutType } from 'src/app/shared';

import { ApiAuthService } from '../../services';

import { ImgLogin } from 'src/assets';

import { BackgroundImgLoginWelcome } from 'src/assets';


@Component({
  selector: 'app-page-login',
  styleUrls: ['./page-login.scss'],
  template: `
    <div class="page-login " [style.background]="'url(assets/images/img-loginBg.png)'">
      <app-shared-layout-form [props]="formProps"/>
    </div>    
  `
})
export class PageLoginComponent {

  user: IUserModel = { password: '', userName: '' }
  isError: boolean = false

  constructor(
    private apiAuthService: ApiAuthService,
    private router: Router
  ) { }

  formProps: FormLayoutType = {
    // background: {
    //   float: 'left',
    //   img: {
    //     src: './loginBg.png',
    //     alt: 'Login Background',
    //   },
      
    // },
    background: {
      img: BackgroundImgLoginWelcome
    },
    panel: {
      msgError: 'Wrong email address or password!',
      isErrorCondition: this.getIsError.bind(this),
      float: 'right',
      title: 'Login',
      inputs: [
        {
          type: 'text', text: 'Email address',
          value: this.user.userName!, name: 'userName',
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
    this.apiAuthService.login(this.user).then(data => {
      if (data.status === 500) this.isError = true
      else this.isError = false
    })
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

  getIsError() {
    return this.isError
  }
}