import { Component } from '@angular/core';

import { ImageType } from 'src/app/core';

import {
  ImgShapeCircleBlue,
  ImgShapeCircleGreen,
  ImgShapeCirclePink,
  ImgShapeCircleYellow,
  ImgShapeConfettiWhite,
  ImgShapeTriangleBlue,
  ImgShapeTriangleGreen,
  ImgShapeTrianglePink,
  ImgShapeTriangleYellow
} from 'src/assets'

@Component({
  selector: 'app-shared-panel-background',
  styleUrls: ['./shared-panel-background.component.scss'],
  template: `
    <div class="panel-background">
        <img
          *ngFor="let img of triangles_green"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
        <img
          *ngFor="let img of triangles_blue"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
        <img
          *ngFor="let img of triangles_pink"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
        <img
          *ngFor="let img of triangles_yellow"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
        <img
          *ngFor="let img of circles_green"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
        <img
          *ngFor="let img of circles_blue"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
        <img
          *ngFor="let img of circles_pink"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
        <img
          *ngFor="let img of circles_yellow"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
        <img
          *ngFor="let img of confetties_white"
          [id]="img.id" [src]="img.src" [alt]="img.alt"
        >
    </div>
  `
})
export class SharedPanelBackgroundComponent {

  triangles_green: ImageType[] = Array.from({ length: 5 }, (_, i) => ({
    src: ImgShapeTriangleGreen.src,
    alt: ImgShapeTriangleGreen.alt + ` ${i+1}`,
    id: ImgShapeTriangleGreen.id + `-${i+1}`
  } satisfies ImageType))

  triangles_blue: ImageType[] = Array.from({ length: 7 }, (_, i) => ({
    src: ImgShapeTriangleBlue.src,
    alt: ImgShapeTriangleBlue.alt + ` ${i+1}`,
    id: ImgShapeTriangleBlue.id + `-${i+1}`
  } satisfies ImageType))

  triangles_pink: ImageType[] = Array.from({ length: 6 }, (_, i) => ({
    src: ImgShapeTrianglePink.src,
    alt: ImgShapeTrianglePink.alt + ` ${i+1}`,
    id: ImgShapeTrianglePink.id + `-${i+1}`
  } satisfies ImageType))

  triangles_yellow: ImageType[] = Array.from({ length: 5 }, (_, i) => ({
    src: ImgShapeTriangleYellow.src,
    alt: ImgShapeTriangleYellow.alt + ` ${i+1}`,
    id: ImgShapeTriangleYellow.id + `-${i+1}`
  } satisfies ImageType))


  circles_green: ImageType[] = Array.from({ length: 3 }, (_, i) => ({
    src: ImgShapeCircleGreen.src,
    alt: ImgShapeCircleGreen.alt + ` ${i+1}`,
    id: ImgShapeCircleGreen.id + `-${i+1}`
  } satisfies ImageType))

  circles_blue: ImageType[] = Array.from({ length: 4 }, (_, i) => ({
    src: ImgShapeCircleBlue.src,
    alt: ImgShapeCircleBlue.alt + ` ${i+1}`,
    id: ImgShapeCircleBlue.id + `-${i+1}`
  } satisfies ImageType))

  circles_pink: ImageType[] = Array.from({ length: 4 }, (_, i) => ({
    src: ImgShapeCirclePink.src,
    alt: ImgShapeCirclePink.alt + ` ${i+1}`,
    id: ImgShapeCirclePink.id + `-${i+1}`
  } satisfies ImageType))

  circles_yellow: ImageType[] = Array.from({ length: 4 }, (_, i) => ({
    src: ImgShapeCircleYellow.src,
    alt: ImgShapeCircleYellow.alt + ` ${i+1}`,
    id: ImgShapeCircleYellow.id + `-${i+1}`
  } satisfies ImageType))


  confetties_white: ImageType[] = Array.from({ length: 13 }, (_, i) => ({
    src: ImgShapeConfettiWhite.src,
    alt: ImgShapeConfettiWhite.alt + ` ${i+1}`,
    id: ImgShapeConfettiWhite.id + `-${i+1}`
  } satisfies ImageType))
}