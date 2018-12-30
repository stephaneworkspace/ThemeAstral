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

  private aspects;

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

    this.aspects = {
      sun: {
        position: ephem.observed.sun.apparentLongitudeDms30,
        aspects: [] = []
      },
      mercury: {
        position: ephem.observed.mercury.apparentLongitudeDms30,
        aspects: [] = []
      },
      venus: {
        position: ephem.observed.venus.apparentLongitudeDms30,
        aspects: [] = []
      },
      mars: {
        position: ephem.observed.mars.apparentLongitudeDms30,
        aspects: [] = []
      },
      moon: {
        position: ephem.observed.moon.apparentLongitudeDms30,
        aspects: [] = []
      },
      jupiter: {
        position: ephem.observed.jupiter.apparentLongitudeDms30,
        aspects: [] = []
      },
      saturn: {
        position: ephem.observed.saturn.apparentLongitudeDms30,
        aspects: [] = []
      },
      uranus: {
        position: ephem.observed.uranus.apparentLongitudeDms30,
        aspects: [] = []
      },
      neptune: {
        position: ephem.observed.neptune.apparentLongitudeDms30,
        aspects: [] = []
      },
      pluto: {
        position: ephem.observed.pluto.apparentLongitudeDms30,
        aspects: [] = []
      },
    };

    // sun
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'sun') {
        this.aspects.sun.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // mercury
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'mercury') {
        this.aspects.mercury.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // venus
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'venus') {
        this.aspects.venus.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // mars
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'mars') {
        this.aspects.mars.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // moon
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'moon') {
        this.aspects.moon.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // jupiter
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'jupiter') {
        this.aspects.jupiter.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // saturn
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'saturn') {
        this.aspects.saturn.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // uranus
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'uranus') {
        this.aspects.uranus.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // neptune
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'neptune') {
        this.aspects.neptune.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });
    // pluto
    drawn.aspects.forEach(element => {
      if (element.planetA.nom === 'pluto') {
        this.aspects.pluto.aspects.push({
          planet: element.planetB.nom,
          type: element.aspect,
          degree: element.radius
        });
      }
    });

    console.log(this.aspects);
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

  getAspect(planet) {
    switch (planet) {
      case 'sun':
        return {
          position: this.aspects.sun.position,
          aspects: this.aspects.sun.aspects.slice(0)
        };
        break;
      case 'moon':
        return {
          position: this.aspects.moon.position,
          aspects: this.aspects.moon.aspects.slice(0)
        };
        break;
      case 'mercury':
        return {
          position: this.aspects.mercury.position,
          aspects: this.aspects.mercury.aspects.slice(0)
        };
        break;
      case 'venus':
        return {
          position: this.aspects.venus.position,
          aspects: this.aspects.venus.aspects.slice(0)
        };
        break;
      case 'mars':
        return {
          position: this.aspects.mars.position,
          aspects: this.aspects.mars.aspects.slice(0)
        };
        break;
      case 'jupiter':
        return {
          position: this.aspects.jupiter.position,
          aspects: this.aspects.jupiter.aspects.slice(0)
        };
        break;
      case 'saturn':
        return {
          position: this.aspects.saturn.position,
          aspects: this.aspects.saturn.aspects.slice(0)
        };
        break;
      case 'uranus':
        return {
          position: this.aspects.uranus.position,
          aspects: this.aspects.uranus.aspects.slice(0)
        };
        break;
      case 'neptune':
        return {
          position: this.aspects.neptune.position,
          aspects: this.aspects.neptune.aspects.slice(0)
        };
        break;
      case 'pluto':
        return {
          position: this.aspects.pluto.position,
          aspects: this.aspects.pluto.aspects.slice(0)
        };
        break;
    }
  }
}
