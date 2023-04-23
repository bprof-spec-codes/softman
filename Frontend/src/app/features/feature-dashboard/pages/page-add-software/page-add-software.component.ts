import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

@Component({
  selector: 'app-page-add-software',
  styles: [],
  template: `
    <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
  `
})
export class PageAddSoftwareComponent {

  formProps: FormLayoutType = {
    background: {
      float: 'right',
      src: 'image-bg02.svg'
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
      ]
    }
  }
}