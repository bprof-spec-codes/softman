import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-panel-drag-n-drop',
  styleUrls: ['./shared-panel-drag-n-drop.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="panel-drag-n-drop" (dragover)="allowDrop($event)" (drop)="drop($event)">
    <p class="subtitle"><span>Upload Software</span><br><span id="counter">0%</span></p>
    <div class="upload-bar">
      <div id="progress-line"></div>
    </div>
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