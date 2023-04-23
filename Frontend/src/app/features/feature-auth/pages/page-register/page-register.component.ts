import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

@Component({
  selector: 'app-page-register',
  styles: [],
  template: `
    <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
  `
})
export class PageRegisterComponent {

  formProps: FormLayoutType = {
    background: {
      float: 'left',
      src: 'image-bg05.svg'
    },
    panel: {
      float: 'right',
      title: 'Register',
      inputs: [
        { type: 'text', text: 'Email address' },
        { type: 'text', text: 'First name' },
        { type: 'text', text: 'Last name' },
        { type: 'text', text: 'Password' },
        { type: 'text', text: 'Password again' }
      ],
      buttons: [
        { display: 'block-normal', type: 'filled', text: 'Sign up' }
      ]
    }
  }
}