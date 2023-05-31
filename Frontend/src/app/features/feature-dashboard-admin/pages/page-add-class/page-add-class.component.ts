import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { FormLayoutType } from 'src/app/shared';
import { IClassroomModel } from 'src/app/core';

import { ApiAdminClassService } from '../../services'

@Component({
  selector: 'app-page-add-class',
  styles: [],
  template: `
    <div class="page-add-class">
      <app-shared-layout-form [props]="formProps"/>
    </div>
  `
})
export class PageAddClassComponent {

  classroom: IClassroomModel = { id: '', roomNumber: '', storageCapacity: 0 }

  formProps: FormLayoutType = {
    panel: {
      float: 'left',
      title: 'Add Class',
      inputs: [
        {
          type: 'text', text: 'Classnumber',
          value: this.classroom.roomNumber, name: 'roomNumber',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'number', text: 'Size',
          value: '', name: 'storageCapacity',
          onChange: this.onInputChange.bind(this)
        }
      ],
      buttons: [
        {
          display: 'block-normal', type: 'filled', text: 'Add new',
          onClick: this.onAddClick.bind(this)
        }
      ],
      padding: {
        between_input_button: true
      }
    }
  }

  constructor(
    private router: Router,
    private apiAdminClassService: ApiAdminClassService
  ) { }

  async onAddClick(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    await this.apiAdminClassService.addClass(this.classroom)
    this.router.navigate(['admin/manage-claims'])
  }

  onInputChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement
    this.classroom = {...this.classroom, [name]: value}
  }
}