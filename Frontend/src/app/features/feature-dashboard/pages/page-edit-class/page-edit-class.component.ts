import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

@Component({
  selector: 'app-page-edit-class',
  styles: [],
  template: `
    <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
  `
})
export class PageEditClassComponent {

  formProps: FormLayoutType = {
    background: {
      float: 'right',
      src: 'image-bg03.svg'
    },
    panel: {
      float: 'left',
      title: 'Edit Class',
      inputs: [
          { type: 'text', text: 'Classnumber' },
          { type: 'text', text: 'Size' }
      ],
      buttons: [
          { display: 'block-normal', type: 'filled', text: 'Update' }
      ]
    }
  }
}