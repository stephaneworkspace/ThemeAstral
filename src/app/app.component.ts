import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { fromEvent, Subscription, from } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';
import { getAllPlanets } from 'ephemeris_npm';
import { AbstractFormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ThemeAstral';
  // test = calc(3, 4, 1986, 4, 54);
  // result = getAllPlanets('03.04.1986 04:54:00', -71.13, 42.27, 0);
  // 46.202222 lon 6.14569
  // test = getAllPlanets(3, 4, 1986, 4, 54, -71.13, 42.27, 0);
  test: any = getAllPlanets('03.04.1986 04:54:00', -71.13, 42.27, 0);

  private _size = 500;
  @ViewChild('myCanvas') myCanvas: ElementRef;

  ngAfterViewInit() {
    // wait for the view to init before using the element
    const context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    // happy drawing from here on
    context.fillStyle = 'white';
    context.fillRect(0, 0, 450, 450);

  }

  get size() {
    return this._size;
  }

  @Input () set size(newValue: number) {
      this._size = Math.floor(newValue);
  }

  // Ephemerides
  constructor() {
    console.log(this.test);
  }
}
