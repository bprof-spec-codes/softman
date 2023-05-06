import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService, GuardUserService, GuardAdminService } from '../../services';

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
          (click)="router.navigate([''])"
        >
        <ul>
          <li><a routerLink="dashboard/request-softwares">Request softwares</a></li>
          <li><a routerLink="dashboard/add-software">Add software</a></li>
          <li *ngIf="guardAdminService.isLoggedIn()"><a>Manage claims</a></li>
          <li *ngIf="guardAdminService.isLoggedIn()"><a routerLink="admin/add-class">Add class</a></li>
        </ul>
        <ng-template
          *ngIf="
            !guardUserService.isLoggedIn()
            else sign_out
          "
        >
          <app-shared-button            
            text="Sign in"
            [ngClass]="'btn'"
            (click)="router.navigate(['auth/login'])"
          ></app-shared-button>
        </ng-template>
        <ng-template
          #sign_out
        >
          <app-shared-button
            text="Sign out"
            type="outlined"
            [ngClass]="'btn'"
            (click)="storageService.clear()"
          ></app-shared-button>
        </ng-template>
      </nav>
    </header>
  `
})
export class NavComponent {
  constructor(
    public router: Router,
    public storageService: LocalStorageService,
    public guardUserService: GuardUserService,
    public guardAdminService: GuardAdminService
  ) { }

  imgLogoServer = ImgLogoServer
}