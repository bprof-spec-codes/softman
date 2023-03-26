import { Component } from '@angular/core';

@Component({
  selector: 'app-flow-layout-panel',
  styleUrls: ['./flow-layout-panel.component.scss'],
  template: `
    <div class="flow-layout-panel">
        <div class="content">
            <ng-content></ng-content>
        </div>
    </div>
  `
})
export class FlowLayoutPanelComponent {

}