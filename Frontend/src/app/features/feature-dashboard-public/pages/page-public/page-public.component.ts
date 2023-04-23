import { Component, ViewEncapsulation } from '@angular/core';

import { ISoftwareModel } from 'src/app/core';

import {
  ImgSEO,
  ImgSpaceDiscovery,
  ImgIdea,
  ImgPlan,
  ImgMSLoginBtn
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

  dummySoftware: ISoftwareModel = {
    id: 'id',
    name: 'Word',
    size: 450,
    versionNumber: '1.0'
  }
}