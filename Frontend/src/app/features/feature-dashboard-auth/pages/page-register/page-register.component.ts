import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

import { ImgRegisterWelcome } from 'src/assets';

@Component({
  selector: 'app-page-register',
  styles: [],
  template: `
    <div class="page-register">
      <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
    </div>
  `
})
export class PageRegisterComponent {

  formProps: FormLayoutType = {
    background: {
      float: 'left',
      img: ImgRegisterWelcome
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
      ],
      padding: {
        large_after_last: true
      }
    }
  }
}