import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { ISoftwareModel, ISoftwareClaimModel } from 'src/app/core';

@Component({
  selector: 'app-shared-item-software',
  styleUrls: ['./shared-item-software.component-responsive.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      *ngIf="
        !isExtended
        else extended
      "
      class="item-software"
      draggable="true"
      (dragstart)="drag($event)"
    >
      <div class="item-software__cell-1"><div class="avatar "><img class="rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt=""></div></div>
      <div class="item-software__cell-2"><span class="name">{{software.name}} {{software.versionNumber}}</span></div>
      <div class="item-software__cell-3"><span class="text">{{serializedSize}}</span></div>
    </div>
    <ng-template #extended>
      <div class="item-software-max">
        <div class="item-software-max__cell-1"><div class="avatar"><img class="rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt=""></div></div>
        <div class="item-software-max__cell-2">
          <ul>
            <li><span>{{software.name}} {{software.versionNumber}}</span></li>
            <li><span>{{serializedSize}}</span></li>
            <li><span>Sent by: {{softwareClaim!.appUserId}}</span></li>
            <li><span>Status: <span [ngClass]="serializedStatus">{{serializedStatus}}</span></span></li>
            <li><span>{{serializedDate}}</span></li>
          </ul>
          <div class="btns">
            <app-shared-button-circle
              [value]="true"
              [isActive]="this.softwareClaim!.status === 0"
              (click)="updateStatus({ claim: this.softwareClaim!, status: 1 })"
            />
            <app-shared-button-circle
              [isActive]="this.softwareClaim!.status === 0"
              (click)="updateStatus({ claim: this.softwareClaim!, status: 2 })"
            />
          </div>
        </div>
      </div>
    </ng-template>
  `
})
export class SharedItemSoftwareComponent {
  @Input() software!: ISoftwareModel
  @Input() softwareClaim?: ISoftwareClaimModel
  @Input() isExtended: boolean = false
  @Output() update: EventEmitter<any> = new EventEmitter()

  get serializedSize(): string {
      return `Size: ${this.software?.size} MB`
  }

  get serializedStatus(): string {
    return this.softwareClaim!.status === 0 ? 'sent' : this.softwareClaim!.status === 1 ? 'accepted' : 'rejected'
  }

  get serializedDate(): string {
    const date = new Date(this.softwareClaim!.claimDate)
    return `Date: ${date.toLocaleDateString('hu-HU', { year: 'numeric', month: '2-digit', day: '2-digit' })}`
  }

  updateStatus(args: { claim: ISoftwareClaimModel, status: number }) {
    if (this.softwareClaim!.status === 0) {
      this.update.emit(args)
    }
  }

  drag(e: DragEvent) {
    e.dataTransfer?.setData('text', JSON.stringify(this.software))
  }
}