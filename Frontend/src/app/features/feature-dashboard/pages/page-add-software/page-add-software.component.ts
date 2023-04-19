import { Component, ViewEncapsulation } from '@angular/core';

import { FormOptionsType } from '../../components';

@Component({
  selector: 'app-page-add-software',
  templateUrl: './page-add-software.component.html',
  styleUrls: ['./page-add-software.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageAddSoftwareComponent {

  formOptions: FormOptionsType = {
    title: 'Add Software',
    inputs: [
      { type: 'text', text: 'Name' },
      { type: 'text', text: 'Size' },
      { type: 'file', text: 'Picture' }
    ],
    buttons: [
      { display: 'block-normal', type: 'filled', text: 'Add new' },
    ]
  }
}