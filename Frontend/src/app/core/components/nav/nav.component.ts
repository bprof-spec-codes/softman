import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { ImgLogoServer } from 'src/assets';

@Component({
  selector: 'app-core-nav',
  styleUrls: ['./nav.component.scss'],
  template: `
    <header>
      <nav>
        <img
          [src]="imgLogoServer.src"
          [alt]="imgLogoServer.alt"
          (click)="navigateToPublic()"
        >
        <ul>
            <li><a routerLink="dashboard/request-softwares">Request softwares</a></li>
            <li><a routerLink="dashboard/add-software">Add software</a></li>
            <li><a>Manage claims</a></li>
            <li><a routerLink="admin/add-class">Add class</a></li>
        </ul>
        <app-shared-button
            text="Sign in"
            [ngClass]="'btn'"
            (click)="btnClick()"
        ></app-shared-button>
      </nav>
    </header>
  `
})
export class NavComponent {
  constructor(private _router: Router) {}

  imgLogoServer = ImgLogoServer

  navigateToPublic() {
    this._router.navigate([''])
  }

  btnClick() {
    this._router.navigate(['auth/login'])
  }
}