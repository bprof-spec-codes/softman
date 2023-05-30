import { Component, ViewEncapsulation } from '@angular/core';

import { ISoftwareModel } from 'src/app/core';

import {
  ImgSEO,
  ImgSpaceDiscovery,
  ImgIdea,
  ImgPlan,
  ImgMSLoginBtn,
  ImgDevs
} from 'src/assets'

@Component({
  selector: 'app-page-public',
  templateUrl: './page-public.component.html',
  styleUrls: ['./page-public.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagePublicComponent {

  imgSEO = ImgSEO
  imgSpaceDiscovery = ImgSpaceDiscovery
  imgIdea = ImgIdea
  imgPlan = ImgPlan
  imgMSLoginBtn = ImgMSLoginBtn
  imgDevs = ImgDevs

  softwaresInDND: ISoftwareModel[] = []

  dummySoftware: ISoftwareModel = {
    id: 'id',
    name: 'Word',
    size: 450,
    versionNumber: '1.0',
    pictureData: '',
    pictureContentType: ''
  }

  addSoftware(softwareJson: string) {
    const software = JSON.parse(softwareJson) as ISoftwareModel
    this.softwaresInDND = [software]
  }
}