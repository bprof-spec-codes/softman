import { Component, Input } from '@angular/core';

import { ISoftwareModel } from 'src/app/core';

@Component({
  selector: 'app-shared-item-software',
  styleUrls: ['./shared-item-software.component.scss'],
  template: `
    <div class="item-software" draggable="true" (dragstart)="drag($event)">
        <div class="item-software__cell-1"><div class="avatar"></div></div>
        <div class="item-software__cell-2"><span class="name">{{software.name}}</span></div>
        <div class="item-software__cell-3"><span class="size">{{serializedSize}}</span></div>
    </div>
  `
})
export class SharedItemSoftwareComponent {
  @Input() software!: ISoftwareModel

  get serializedSize(): string {
      return `Size: ${this.software.size} MB`
  }

  drag(e: DragEvent) {
    e.dataTransfer?.setData('text', JSON.stringify(this.software))
  }
}