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
          <li><a routerLink="dashboard/request-softwares" routerLinkActive="active">Request softwares</a></li>
          <li><a routerLink="dashboard/add-software" routerLinkActive="active">Add software</a></li>
          <li *ngIf="guardAdminService.isLoggedIn()"><a routerLink="admin/manage-claims" routerLinkActive="active">Manage claims</a></li>
          <li *ngIf="guardAdminService.isLoggedIn()"><a routerLink="admin/add-class" routerLinkActive="active">Add class</a></li>
        </ul>
        <app-shared-button
          *ngIf="
            !guardUserService.isLoggedIn()
            else sign_out
          "
          text="Sign in"
          [ngClass]="'btn'"
          (click)="router.navigate(['auth/login'])"
        />
        <ng-template #sign_out>
          <app-shared-button
            text="Sign out"
            type="outlined"
            [ngClass]="'btn'"
            (click)="storageService.clear()"
          />
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