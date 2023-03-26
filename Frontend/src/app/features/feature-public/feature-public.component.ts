import { Component, ViewEncapsulation } from '@angular/core';

import { ISoftwareModel } from 'src/app/core/models';

@Component({
  selector: 'app-feature-public',
  templateUrl: './feature-public.component.html',
  styleUrls: ['./feature-public.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturePublicComponent {
  dummySoftware: ISoftwareModel = {
    id: 'id',
    name: 'Word',
    size: 450,
    versionNumber: '1.0'
  }
}