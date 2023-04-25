import { Component } from '@angular/core';

import { FormLayoutType } from 'src/app/shared';

@Component({
  selector: 'app-page-add-class',
  styles: [],
  template: `
    <div class="page-add-class">
      <app-shared-layout-form [props]="formProps"></app-shared-layout-form>
    </div>
  `
})
export class PageAddClassComponent {

  formProps: FormLayoutType = {
    panel: {
      float: 'left',
      title: 'Add Class',
      inputs: [
        { type: 'text', text: 'Classnumber', value: '', name: '', onChange: (e) => {} },
        { type: 'text', text: 'Size', value: '', name: '', onChange: (e) => {} }
      ],
      buttons: [
        { display: 'block-normal', type: 'filled', text: 'Add new', onClick: (e) => {} }
      ],
      padding: {
        between_input_button: true
      }
    }
  }
}