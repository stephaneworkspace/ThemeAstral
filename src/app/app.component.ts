import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { getAllPlanets } from 'ephemeris_npm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  max = 1;
  current = 0;
  title = 'ThemeAstral';
  // test = calc(3, 4, 1986, 4, 54);
  // result = getAllPlanets('03.04.1986 04:54:00', -71.13, 42.27, 0);
  // 46.202222 lon 6.14569
  // test = getAllPlanets(3, 4, 1986, 4, 54, -71.13, 42.27, 0);
  test: any = getAllPlanets('03.04.1986 04:54:00', -71.13, 42.27, 0);

  constructor() {
    console.log(this.test);
  }

  /// Start the timer
  start() {
    const interval = Observable.interval(100);
        interval
          .takeWhile(_ => !this.isFinished )
          .do(i => this.current += 0.1)
          .subscribe();
  }

   /// finish timer
  finish() {
    this.current = this.max;
  }

  /// reset timer
  reset() {
    this.current = 0;
  }

  /// Getters to prevent NaN errors

  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }
}
