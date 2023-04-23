import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-panel-flow-layout',
  styleUrls: ['./shared-panel-flow-layout.component.scss'],
  template: `
    <div class="panel-flow-layout">
        <div class="content">
            <ng-content></ng-content>
        </div>
    </div>
  `
})
export class SharedPanelFlowLayoutComponent {

}