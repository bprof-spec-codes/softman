import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
    <app-core-nav></app-core-nav>
    <app-core-main>
      <router-outlet></router-outlet>
    </app-core-main>    
  `
})
export class AppComponent {
  title = 'Frontend';
}
