import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

@Component({
  selector: 'app-page-login',
  styles: [],
  template: `
    <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
  `
})
export class PageLoginComponent {

  formProps: FormLayoutType = {
    background: {
      float: 'left',
      src: 'image-bg04.svg'
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