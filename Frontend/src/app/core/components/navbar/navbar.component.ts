import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  styleUrls: ['./navbar.component.scss'],
  template: `
    <header>
      <nav>
        <img
          src="assets/images/image-logo.svg"
          alt="Logo"
          (click)="navigateToPublic()"
        >
        <ul>
            <li><a routerLink="dashboard/request-softwares">Request softwares</a></li>
            <li><a routerLink="dashboard/add-software">Add software</a></li>
            <li><a>Manage claims</a></li>
            <li><a routerLink="dashboard/add-class">Add class</a></li>
        </ul>
        <app-shared-button
            text="Sign in"
            [ngClass]="'btn'"
        ></app-shared-button>
      </nav>
    </header>
  `
})
export class NavbarComponent {
  constructor(private _router: Router) {}

  navigateToPublic() {
    this._router.navigate([''])
  }
}