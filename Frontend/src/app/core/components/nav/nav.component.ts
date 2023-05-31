import { Component, TemplateRef, ViewChild, HostListener  } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService, GuardUserService, GuardAdminService } from '../../services';

import { ImgLogoServer } from 'src/assets';

@Component({
  selector: 'app-core-nav',
  styleUrls: ['./nav.component.scss'],
  templateUrl: './nav.component.html'
})
export class NavComponent {
//phone screen, drop-down-list hidden/shown
 menuVariable = true;
 menu_icon_variable = false;
//logo
 imgLogoServer = ImgLogoServer
//swap between templates by screen size (width)

/*
screenWidth: number = 0;
screenHeight: number = 0;
  // update the screen size when the window is resized
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

 @ViewChild('template1') template1!: TemplateRef<any>;
 @ViewChild('template2') template2!: TemplateRef<any>;

 selectedTemplate!: TemplateRef<any>;

 showTemplate1: boolean = true;
 
 ngOnInit() {
  this.screenWidth = window.innerWidth;
  this.screenHeight = window.innerHeight;
  this.switchTemplate()
 }

switchTemplate() {
  if (this.screenWidth > 999) {
    this.showTemplate1 = true;
  }else this.showTemplate1 = false;
  this.selectedTemplate = this.showTemplate1 ? this.template1 : this.template2;
}
*/

 constructor(
  public router: Router,
  public storageService: LocalStorageService,
  public guardUserService: GuardUserService,
  public guardAdminService: GuardAdminService
) { }

 openMenu() {
   this.menuVariable = !this.menuVariable;
   this.menu_icon_variable = !this.menu_icon_variable;
   console.log(2 + 3)
 }

}