import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-panel-drag-n-drop',
  styleUrls: ['./shared-panel-drag-n-drop.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="panel-drag-n-drop" (dragover)="allowDrop($event)" (drop)="drop($event)">
        <span class="placeholder">Drop here</span>
        <app-shared-panel-flow-layout>
          <ng-content/>
        </app-shared-panel-flow-layout>
    </div>
  `
})
export class SharedPanelDragNDropComponent {
  @Output() addSoftware: EventEmitter<any> = new EventEmitter()
  
  allowDrop(e: Event) {
    e.preventDefault()
  }

  drop(e: DragEvent) {
    e.preventDefault()
    const data = e.dataTransfer?.getData('text')
    this.addSoftware.emit(data)
  }
}