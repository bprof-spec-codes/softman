import { Component } from '@angular/core';
import { Location } from '@angular/common'

import { FormLayoutType } from 'src/app/shared';
import { ISoftwareModel } from 'src/app/core';

import { FNSService } from 'src/app/core';
import { ApiUserSoftwareService } from '../../services';

import { ImgSupport } from 'src/assets';

@Component({
  selector: 'app-page-add-software',
  styles: [],
  template: `
    <div class="page-add-software">
      <app-shared-layout-form [props]="formProps"/>
    </div>
  `
})
export class PageAddSoftwareComponent {

  software: ISoftwareModel = {
    id: '',
    name: '',
    size: 0,
    versionNumber: ''
  }

  formProps: FormLayoutType = {
    background: {
      // float: 'right',
      img: ImgSupport
    },
    panel: {
      float: 'left',
      title: 'Add Software',
      inputs: [
        {
          type: 'text', text: 'Name',
          value: this.software.name, name: 'name',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'text', text: 'Version',
          value: this.software.versionNumber, name: 'versionNumber',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'number', text: 'Size',
          value: '', name: 'size',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'file', text: 'Picture',
          value: '', name: 'file',
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
    private location: Location,
    private apiUserSoftwareService: ApiUserSoftwareService
  ) { }

  async onAddClick(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    await this.apiUserSoftwareService.addSoftware(this.software)
    this.location.back()
  }

  onInputChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement
    if (name === 'file') {
      this.software.imageFile = (e.target as HTMLInputElement).files![0]
    }
    else {
      this.software = {...this.software, [name]: value}
    }
  }
}