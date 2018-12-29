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

  // test: any = getAllPlanets('03.04.1986 04:54:00', -71.13, 42.27, 0);

  private _size = 450;
  private _zodiac = {
    ascendant: {
      sign: 1,
      degree: 1.15
    }
  };
  /*
  private _arrayZodiac12: Array<XY>;
  private _arrayZodiac: Array<XY210>;*/
  private properties;

  @ViewChild('myCanvas') myCanvas: ElementRef;
  // @ViewChild('zodiacAries') zodiacAries: ElementRef;

  constructor() {
  }

  onSubmit(): void {
    console.log(this.saisieForm.value);
    this.swForm = false;
    const ephem = getAllPlanets('03.04.1986 04:54:00', -71.13, 42.27, 0);
    console.log(ephem);



    this.properties = {
      zodiac: {
        ascendant: {
          sign: 1,      // Sets ascendant by sign. See src/zodiac.js.
          degree: 1.15    // Sets degree offset for ascendant sign.
        }
      },
      planets: {        // Sets degree of planets.
        sun: ephem.observed.sun.apparentLongitudeDd,
        mercury: ephem.observed.mercury.apparentLongitudeDd,
        venus: ephem.observed.venus.apparentLongitudeDd,
        mars: ephem.observed.mars.apparentLongitudeDd,
        moon: ephem.observed.moon.apparentLongitudeDd,
        jupiter: ephem.observed.jupiter.apparentLongitudeDd,
        saturn: ephem.observed.saturn.apparentLongitudeDd,
        uranus: ephem.observed.uranus.apparentLongitudeDd,
        neptune: ephem.observed.neptune.apparentLongitudeDd,
        pluto: ephem.observed.pluto.apparentLongitudeDd,
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
        sun: null,
        mercury: null,
        venus: null,
        mars: null,
        moon: null,
        jupiter: null,
        saturn: null,
        uranus: null,
        neptune: null,
        pluto: null
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

  }
}
