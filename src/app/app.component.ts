import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { fromEvent, Subscription, from } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';
import { getAllPlanets } from 'ephemeris_npm';

export interface XY {
  xy216: XY216;
  itemNumber: number;
}

export interface XY216 {
  x: number;
  y: number;
}

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

  private _size = 450;
  private _zodiac = {
    ascendant: {
      sign: 1,
      degree: 1.15
    }
  };
  private _arrayZodiac12: Array<XY>;

  @ViewChild('myCanvas') myCanvas: ElementRef;
  // @ViewChild('zodiacAries') zodiacAries: ElementRef;

  ngAfterViewInit() {
    let self = this;
    this._arrayZodiac12 = [];
    // wait for the view to init before using the element
    const context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext('2d');
    // happy drawing from here on
    context.fillStyle = 'white';
    context.fillRect(0, 0, 450, 450);

    // Cercle qui touche presque la bordure * 0.48
    context.beginPath();
    context.arc(this._size * 0.5, this._size * 0.5, this._size * 0.48, 0, Math.PI * 2, false); // Outer circle
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();

    // Cercle à 0.4
    context.beginPath();
    context.arc(this._size * 0.5, this._size * 0.5, this._size * 0.4, 0, Math.PI * 2, false); // Outer circle
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();

    // 12 signes astrologique décalage par rapport au zodiaque
    context.beginPath();
    // trait par degré
    let step = 2 * Math.PI / 12;
    let h = this._size * 0.5;
    let k = this._size * 0.5;
    let r = 216; // taille du trait
    let x = 0;
    let y = 0;
    let itemNumber = 4;

    for (let theta = 0 - this._zodiac.ascendant.degree;  theta < (2 * Math.PI) - this._zodiac.ascendant.degree;  theta += step) {
      itemNumber++;
      if (itemNumber > 12) {
        itemNumber = 1;
      }
      x = h + r * Math.cos(theta);
      y = k - r * Math.sin(theta);
      context.moveTo(this._size * 0.5, this._size * 0.5);
      context.lineTo(x, y);

      this._arrayZodiac12.push({
        xy216: {
          x: x,
          y: y,
        },
        itemNumber: itemNumber
      });

      // context.drawImage(this.signeBelier, this._size * 0.5, this._size * 0.5);
    }
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();

    // 360 Traits jusqu'au centre
    context.beginPath();
    // trait par degré
    step = 2 * Math.PI / 360;
    h = this._size * 0.5;
    k = this._size * 0.5;
    r = 180; // taille du trait
    x = 0;
    y = 0;
    for (let theta = 0;  theta < 2 * Math.PI;  theta += step) {
      if (theta === 0) {
        // eviter de reécrire dessus
      } else {
        x = h + r * Math.cos(theta);
        y = k - r * Math.sin(theta);
        context.moveTo(this._size * 0.5, this._size * 0.5);
        context.lineTo(x, y);
      }
    }
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();

    // Cercle à 0.4 pour effacer les fracal 360°
    context.beginPath();
    context.arc(this._size * 0.5, this._size * 0.5, this._size * 0.38, 0, Math.PI * 2, false); // Outer circle
    context.strokeStyle = 'white';
    context.stroke();
    context.fill();
    context.closePath();

    // AS
    const imageSignAries = new Image();
    const imageSignTaurus = new Image();
    console.log(this._arrayZodiac12);
    for (let signeOrdre = 0;  signeOrdre <= 12;  signeOrdre += 1) {
      switch (signeOrdre) {
        case 1:
          switch (this._zodiac.ascendant.sign) {
            case 1:
              // Début par bélier
              self = this;
              imageSignAries.onload = function (e: any)  {
                self._arrayZodiac12.forEach(element => {
                  if (element.itemNumber === 1) {
                    context.drawImage(imageSignAries, element.xy216.x, element.xy216.y);
                  }
                });
              };
              imageSignAries.src = 'assets/resources/png/zodiac/aries.png';
            break;
          }
          break;
        case 2:
          switch (this._zodiac.ascendant.sign) {
            case 1:
              // Début par bélier -> taureau
              self = this;
              imageSignTaurus.onload = function () {
                self._arrayZodiac12.forEach(element => {
                  if (element.itemNumber === 2) {
                    context.drawImage(imageSignTaurus, element.xy216.x, element.xy216.y);
                  }
                });
              };
              imageSignTaurus.src = 'assets/resources/png/zodiac/taurus.png';
            break;
          }
          break;
      }
    }




    /* bidouille
    const step = 2 * Math.PI / 12;
    const h = this._size * 0.5;
    const k = this._size * 0.5;
    const r = 150; // taille du trait
    let x = 0;
    let y = 0;

    for (let theta = 0;  theta < 2 * Math.PI;  theta += step) {
      x = h + r * Math.cos(theta);
      y = k - r * Math.sin(theta);
      context.moveTo(this._size * 0.5, this._size * 0.5);
      context.lineTo(x, y);
    }

    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();*/
  }
}
