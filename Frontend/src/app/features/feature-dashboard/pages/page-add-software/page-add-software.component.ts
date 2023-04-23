import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

import { ImgSupport } from 'src/assets';

@Component({
  selector: 'app-page-add-software',
  styles: [],
  template: `
    <div class="page-add-software">
      <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
    </div>
  `
})
export class PageAddSoftwareComponent {

  formProps: FormLayoutType = {
    background: {
      float: 'right',
      img: ImgSupport
    },
    panel: {
      float: 'left',
      title: 'Add Software',
      inputs: [
        { type: 'text', text: 'Name' },
        { type: 'text', text: 'Size' },
        { type: 'file', text: 'Picture' }
      ],
      buttons: [
        { display: 'block-normal', type: 'filled', text: 'Add new' }
      ],
      padding: {
        between_input_button: true
      }
    }
  }
}