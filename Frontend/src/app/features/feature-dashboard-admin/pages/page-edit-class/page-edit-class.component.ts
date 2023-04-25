import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

import { ImgBlogging } from 'src/assets';

@Component({
  selector: 'app-page-edit-class',
  styles: [],
  template: `
    <div class="page-edit-class">
      <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
    </div>
  `
})
export class PageEditClassComponent {

  formProps: FormLayoutType = {
    background: {
      float: 'right',
      img: ImgBlogging
    },
    panel: {
      float: 'left',
      title: 'Edit Class',
      inputs: [
          { type: 'text', text: 'Classnumber', value: '', name: '', onChange: (e) => {} },
          { type: 'text', text: 'Size', value: '', name: '', onChange: (e) => {} }
      ],
      buttons: [
          { display: 'block-normal', type: 'filled', text: 'Update', onClick: (e) => {} }
      ],
      padding: {
        between_input_button: true
      }
    }
  }
}