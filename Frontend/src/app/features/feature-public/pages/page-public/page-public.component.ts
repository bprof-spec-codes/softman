import { Component, ViewEncapsulation } from '@angular/core';

import { ISoftwareModel } from 'src/app/core';

@Component({
  selector: 'app-page-public',
  templateUrl: './page-public.component.html',
  styleUrls: ['./page-public.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagePublicComponent {
  dummySoftware: ISoftwareModel = {
    id: 'id',
    name: 'Word',
    size: 450,
    versionNumber: '1.0'
  }
}