import { Component, ViewEncapsulation } from '@angular/core';

import { FormOptionsType } from '../../components';

@Component({
  selector: 'app-page-add-class',
  templateUrl: './page-add-class.component.html',
  styleUrls: ['./page-add-class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageAddClassComponent {

  formOptions: FormOptionsType = {
    title: 'Add Class',
    inputs: [
      { type: 'text', text: 'Classnumber' },
      { type: 'text', text: 'Size' }
    ],
    buttons: [
      { display: 'block-normal', type: 'filled', text: 'Add new' },
    ]
  }
}