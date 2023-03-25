import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flow-layout-panel',
  styleUrls: ['./flow-layout-panel.component.scss'],
  template: `
    <div
        class="flow-layout-panel"
        style="
            width: {{width}};
            height: {{height}};
            top: {{top}};
            bottom: {{bottom}};
            left: {{left}};
            right: {{right}};
        "
    >
        <div class="overflow" style="height: {{overflowHeight}}"></div>
        <div class="content"></div>
    </div>
  `
})
export class FlowLayoutPanelComponent {
    @Input() width: string = ''
    @Input() height: string = ''
    @Input() top: string = 'unset'
    @Input() bottom: string = 'unset'
    @Input() left: string = 'unset'
    @Input() right: string = 'unset'

    overflowHeight: string = '3rem'
}