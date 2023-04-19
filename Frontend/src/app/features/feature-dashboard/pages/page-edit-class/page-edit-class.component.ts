import { Component, ViewEncapsulation } from '@angular/core';

import { FormOptionsType } from '../../components';

@Component({
  selector: 'app-page-edit-class',
  templateUrl: './page-edit-class.component.html',
  styleUrls: ['./page-edit-class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageEditClassComponent {

  formOptions: FormOptionsType = {
    title: 'Edit Class',
    inputs: [
        { type: 'text', text: 'Classnumber' },
        { type: 'text', text: 'Size' }
    ],
    buttons: [
        { display: 'block-normal', type: 'filled', text: 'Update' },
    ]
  }
}