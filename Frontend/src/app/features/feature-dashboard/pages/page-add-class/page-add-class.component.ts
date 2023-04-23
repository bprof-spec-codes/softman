import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

@Component({
  selector: 'app-page-add-class',
  styles: [],
  template: `
    <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
  `
})
export class PageAddClassComponent {

  formProps: FormLayoutType = {
    panel: {
      float: 'left',
      title: 'Add Class',
      inputs: [
        { type: 'text', text: 'Classnumber' },
        { type: 'text', text: 'Size' }
      ],
      buttons: [
        { display: 'block-normal', type: 'filled', text: 'Add new' }
      ]
    }
  }
}