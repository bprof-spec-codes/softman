import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

import { ImgLogin } from 'src/assets';

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

  formProps: FormLayoutType = {
    background: {
      float: 'left',
      img: ImgLogin
    },
    panel: {
      float: 'right',
      title: 'Login',
      inputs: [
        { type: 'text', text: 'Email address' },
        { type: 'text', text: 'Password' }
      ],
      buttons: [
        { display: 'inline-left', type: 'filled', text: 'Login' },
        { display: 'inline-right', type: 'outlined', text: 'Sign up' }
      ],
      mslogin: 'with hr'
    }
  }
}