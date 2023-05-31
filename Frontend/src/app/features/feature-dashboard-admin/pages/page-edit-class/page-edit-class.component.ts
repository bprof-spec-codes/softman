import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { FormLayoutType } from 'src/app/shared';
import { IClassroomModel } from 'src/app/core';

import { ApiAdminClassService } from '../../services'

import { ImgBlogging } from 'src/assets';

@Component({
  selector: 'app-page-edit-class',
  styles: [],
  template: `
    <div class="page-edit-class">
      <app-shared-layout-form [props]="formProps"/>
    </div>
  `
})
export class PageEditClassComponent {

  classroom: IClassroomModel = { id: '', roomNumber: '', storageCapacity: 0 }
  formProps: FormLayoutType

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private apiAdminClassService: ApiAdminClassService
  ) {
    const id = route.snapshot.paramMap.get('id')
    const classnumber = route.snapshot.paramMap.get('classnumber')
    const size = route.snapshot.paramMap.get('size')
    
    this.classroom = { id: id!, roomNumber: classnumber!, storageCapacity: Number(size!) }

    this.formProps = {
      background: {
        // float: 'right',
        img: ImgBlogging
      },
      panel: {
        float: 'left',
        title: 'Edit Class',
        inputs: [
            {
              type: 'text', text: 'Classnumber',
              value: this.classroom.roomNumber, name: 'roomNumber',
              onChange: this.onInputChange.bind(this)
            },
            {
              type: 'number', text: 'Size',
              value: this.classroom.storageCapacity.toString(), name: 'storageCapacity',
              onChange: this.onInputChange.bind(this)
            }
        ],
        buttons: [
            {
              display: 'block-normal', type: 'filled', text: 'Update',
              onClick: this.onUpdateClick.bind(this)
            }
        ],
        padding: {
          between_input_button: true
        }
      }
    }
  }

  async onUpdateClick(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    await this.apiAdminClassService.updateClass(this.classroom)
    this.router.navigate(['admin/manage-claims'])
  }

  onInputChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement
    this.classroom = {...this.classroom, [name]: value}
  }
}