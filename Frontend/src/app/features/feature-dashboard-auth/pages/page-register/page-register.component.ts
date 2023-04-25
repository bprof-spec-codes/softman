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
        { type: 'text', text: 'Email address', value: '', name: '', onChange: (e) => {} },
        { type: 'text', text: 'First name', value: '', name: '', onChange: (e) => {} },
        { type: 'text', text: 'Last name', value: '', name: '', onChange: (e) => {} },
        { type: 'text', text: 'Password', value: '', name: '', onChange: (e) => {} },
        { type: 'text', text: 'Password again', value: '', name: '', onChange: (e) => {} }
      ],
      buttons: [
        { display: 'block-normal', type: 'filled', text: 'Sign up', onClick: (e) => {} }
      ],
      padding: {
        large_after_last: true
      }
    }
  }
}