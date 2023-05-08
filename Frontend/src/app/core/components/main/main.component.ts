import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-core-main',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <main>
        <ng-content/>
    </main>
  `
})
export class MainComponent {
  
}