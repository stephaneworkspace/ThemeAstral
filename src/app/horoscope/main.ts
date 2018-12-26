import { Calc } from "./calc"
import { drawer } from './drawer';

export class Horoscope {
    private _drawer;
    private _properties;
    private validPlanetProperties;

    constructor(properties) {
        // this._elements = elements;
        // this._zodiac = zodiac;
        // this._planets = planets;
        this._drawer = drawer;

        this.validPlanetProperties = [
            'sun',
            'mercury',
            'venus',
            'mars',
            'moon',
            'jupiter',
            'saturn',
            'uranus',
            'neptune',
            'pluto',
            'mars'
        ];

        /*
        // Maisons à faire, pour le moment en chantier
        this.validHousesAxesProperties = [
            "axis2to8",
            "axis3to9",
            "axis4to10",
            "axis5to11",
            "axis6to12"
          ];
        */

        // Chargement des ephemerides
        if (properties) {
            this._properties = properties;
        } else {
            this.setDefaultProperties();
        }
        this.validateProperties(this._properties);
    }

    /**
    * Sets default properties if no properties had been passed via constructor parameter.
    */
    setDefaultProperties() {
        this._properties = {};
        this._properties.zodiac = {};
        this._properties.zodiac.ascendant = {
            sign: Calc.getRandomInt(0, 11),
            degree: Calc.getRandomArbitrary(0, 30)
        }
        this._properties.planets = {};
        this._properties.planets.sun = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.mercury = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.venus = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.mars = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.moon = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.jupiter = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.saturn = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.uranus = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.neptune = Calc.getRandomArbitrary(0, 360);
        this._properties.planets.pluto = Calc.getRandomArbitrary(0, 360);

        this._properties.houses = {};
        this._properties.houses.hasHouses = true;
        this._properties.houses.axes = {};
        /*
        this._properties.houses.axes.axis2to8 = Calc.getRandomArbitrary(25, 40);
        this._properties.houses.axes.axis3to9 = Calc.getRandomArbitrary(50, 60);
        this._properties.houses.axes.axis4to10 = Calc.getRandomArbitrary(75, 85);
        this._properties.houses.axes.axis5to11 = Calc.getRandomArbitrary(110, 120);
        this._properties.houses.axes.axis6to12 = Calc.getRandomArbitrary(150, 160);*/
  }
}
