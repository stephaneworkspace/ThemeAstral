import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import { fromEvent, Subscription, from } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';
import { getAllPlanets } from 'ephemeris_npm';

import { Horoscope } from './horoscope/main';

export interface XY {
  // 216 est le cercle exterieur, celui de 0.5
  xy216: XYDetail;
  // 180 est le cercle intérieur
  xy180: XYDetail;
  itemNumber: number;
}

export interface XY210 {
  // 210 est entre les 2 cercles plus proche de celui de 0.5
  xy210: XYDetail;
  itemNumber: number;
}

export interface XYDetail {
  x: number;
  y: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit {
  title = 'ThemeAstral';
  saisieForm: FormGroup;

  swForm = true;

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
  private _arrayZodiac: Array<XY210>;
  private properties;

  @ViewChild('myCanvas') myCanvas: ElementRef;
  // @ViewChild('zodiacAries') zodiacAries: ElementRef;

  constructor() {
  }

  onSubmit(): void {
    console.log(this.saisieForm.value);
    this.swForm = false;
  }

  ngOnInit() {
    this.saisieForm = new FormGroup({
      Nom: new FormControl(),
      Prenom: new FormControl(),
      Jour: new FormControl(),
      Mois: new FormControl(),
      Annee: new FormControl(),
      Heure: new FormControl(),
      Minute: new FormControl()
    });
    this.properties = {
      zodiac: {
        ascendant: {
          sign: 1,      // Sets ascendant by sign. See src/zodiac.js.
          degree: 1.15    // Sets degree offset for ascendant sign.
        }
      },
      planets: {        // Sets degree of planets.
        sun: 65,
        mercury: 12,
        venus: 151.31,
        mars: 231,
        moon: 188,
        jupiter: 311,
        saturn: 100,
        uranus: 199,
        neptune: 278,
        pluto: 31
      },
      houses: {
        hasHouses: true,
        axes: {
          axis2to8: 27,   // Sets degree of axis.
          axis3to9: 56,
          axis4to10: 81,
          axis5to11: 114,
          axis6to12: 156
        }
      }
    };

    const h = new Horoscope(this.properties);
    const drawn = h.draw('#horoscope');
    console.log('Hurray! You have drawn your horoscope.', drawn);
  }

  ngAfterViewInit() {
    let self = this;
    this._arrayZodiac12 = [];
    this._arrayZodiac = [];
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
        xy180: {
          x: h + 180 * Math.cos(theta),
          y: h - 180 * Math.sin(theta),
        },
        itemNumber: itemNumber
      });

      // context.drawImage(this.signeBelier, this._size * 0.5, this._size * 0.5);
    }
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();


    // 12 signes astrologique au milieu donc division par 24
    // avec prise en charge uniquement des paires

    step = 2 * Math.PI / 24;
    h = this._size * 0.5;
    k = this._size * 0.5;
    r = 210; // taille du trait
    x = 0;
    y = 0;
    let itemNumber24 = 8;
    let itemNumberDivide = 0;

    for (let theta = 0 - this._zodiac.ascendant.degree;  theta < (2 * Math.PI) - this._zodiac.ascendant.degree;  theta += step) {
    itemNumber24++;
      if (itemNumber24 > 24) {
        itemNumber24 = 1;
      }
      x = h + r * Math.cos(theta);
      y = k - r * Math.sin(theta);
      context.moveTo(this._size * 0.5, this._size * 0.5);
      context.lineTo(x, y);

      if (itemNumber24 % 2 === 0) {
        itemNumberDivide = itemNumber24 / 2;
        this._arrayZodiac.push({
          xy210: {
            x: x,
            y: y,
          },
          itemNumber: itemNumberDivide
        });
      }

    }



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

    /*
    context.beginPath();
    context.arc(this._size * 0.5, this._size * 0.5, this._size * 0.38, 0, Math.PI * 2, false); // Outer circle
    context.strokeStyle = 'white';
    context.stroke();
    context.fill();
    context.closePath(); */

    // AS
    /*
    const imageSignAries = new Image();
    const imageSignTaurus = new Image();
    console.log(this._arrayZodiac12);
    console.log(this._arrayZodiac);
    for (let signeOrdre = 0;  signeOrdre <= 12;  signeOrdre += 1) {
      switch (signeOrdre) {
        case 1:
          switch (this._zodiac.ascendant.sign) {
            case 1:
              // Début par bélier
              self = this;
              imageSignAries.onload = function (e: any)  {
                self._arrayZodiac.forEach(element => {
                  if (element.itemNumber === 1) {
                    context.drawImage(imageSignAries, element.xy210.x, element.xy210.y);
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
                self._arrayZodiac.forEach(element => {
                  if (element.itemNumber === 2) {
                    context.drawImage(imageSignTaurus, element.xy210.x, element.xy210.y);
                  }
                });
              };
              imageSignTaurus.src = 'assets/resources/png/zodiac/taurus.png';
            break;
          }
          break;
      }
    }

    // Test rotation

    // context.rotate(30);
    // context.restore();
*/



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
