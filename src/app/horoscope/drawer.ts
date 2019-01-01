import 'snapsvg-cjs';
declare var Snap: any;

import { Calc } from './calc';
import { zodiac } from './zodiac';
import { planets } from './planets';
import { elements } from './elements';

export class Drawer {
    private selector;

    private PLANET_IMAGE_WIDTH;
    private PLANET_IMAGE_HEIGHT;
    private PLANET_RADIUS_OFFSET;
    private PLANET_COLLISION_MARGIN_IN_DEGREE;
    private PLANET_COLLISION_CORRECTION_RADIUS;
    private MAX_PLANET_COLLISION_CORRECTION;

    private planets;
    private houses;
    private snap;
    private drawn;

    draw(properties) {
        if (properties.hasOwnProperty('selector')) {
            this.selector = properties.selector;
        } else {
            throw new Error('Irregular selector');
        }

        this.PLANET_IMAGE_WIDTH = 4;
        this.PLANET_IMAGE_HEIGHT = 4;
        this.PLANET_RADIUS_OFFSET = 3;
        this.PLANET_COLLISION_MARGIN_IN_DEGREE = 4;
        this.PLANET_COLLISION_CORRECTION_RADIUS = 4;
        this.MAX_PLANET_COLLISION_CORRECTION = 4;

        this.planets = (properties.hasOwnProperty('planets')) ? properties.planets : null;
        this.houses = (properties.hasOwnProperty('houses')) ? properties.houses : null;

        this.snap = Snap(this.selector);
        this.snap.attr(
            {
                viewBox: '-50 -50 100 100',
                fill: '#FFFFFF'
            }
        );

        this.drawn = {
            circles: this.drawZodiacCircles(),
            degrees: this.drawZodiacDegrees(),
            zodiac: {
                signs: this.drawZodiacSigns(properties.zodiac.ascendant.sign, properties.zodiac.ascendant.degree),
                ascendant: {
                    signIndex: properties.zodiac.ascendant.sign,
                    correctedByDegrees: properties.zodiac.ascendant.degree,
                },
                ascendantCalc: this.drawAscendant(properties.zodiac.ascendantCalc.sign, properties.zodiac.ascendantCalc.degre),
            },
            houses: {
                axes: this.drawHousesAxes(properties.zodiac.ascendantCalc.degre, properties.houses.hasHouses),
                meta: this.houses
            },
            aspects: [
                this.drawAspect(this.planets.sun, this.planets.mercury, 'sun', 'mercury'),
                this.drawAspect(this.planets.sun, this.planets.venus, 'sun', 'venus'),
                this.drawAspect(this.planets.sun, this.planets.mars, 'sun', 'mars'),
                this.drawAspect(this.planets.sun, this.planets.moon, 'sun', 'moon'),
                this.drawAspect(this.planets.sun, this.planets.jupiter, 'sun', 'jupiter'),
                this.drawAspect(this.planets.sun, this.planets.saturn, 'sun', 'saturn'),
                this.drawAspect(this.planets.sun, this.planets.uranus, 'sun', 'uranus'),
                this.drawAspect(this.planets.sun, this.planets.neptune, 'sun', 'neptune'),
                this.drawAspect(this.planets.sun, this.planets.pluto, 'sun', 'pluto'),

                this.drawAspect(this.planets.mercury, this.planets.venus, 'mercury', 'venus'),
                this.drawAspect(this.planets.mercury, this.planets.mars, 'mercury', 'mars'),
                this.drawAspect(this.planets.mercury, this.planets.moon, 'mercury', 'moon'),
                this.drawAspect(this.planets.mercury, this.planets.jupiter, 'mercury', 'jupiter'),
                this.drawAspect(this.planets.mercury, this.planets.saturn, 'mercury', 'saturn'),
                this.drawAspect(this.planets.mercury, this.planets.uranus, 'mercury', 'uranus'),
                this.drawAspect(this.planets.mercury, this.planets.neptune, 'mercury', 'neptune'),
                this.drawAspect(this.planets.mercury, this.planets.pluto, 'mercury', 'pluto'),

                this.drawAspect(this.planets.venus, this.planets.mars, 'venus', 'mars'),
                this.drawAspect(this.planets.venus, this.planets.moon, 'venus', 'moon'),
                this.drawAspect(this.planets.venus, this.planets.jupiter, 'venus', 'jupiter'),
                this.drawAspect(this.planets.venus, this.planets.saturn, 'venus', 'saturn'),
                this.drawAspect(this.planets.venus, this.planets.uranus, 'venus', 'uranus'),
                this.drawAspect(this.planets.venus, this.planets.neptune, 'venus', 'neptune'),
                this.drawAspect(this.planets.venus, this.planets.pluto, 'venus', 'pluto'),

                this.drawAspect(this.planets.mars, this.planets.moon, 'mars', 'moon'),
                this.drawAspect(this.planets.mars, this.planets.jupiter, 'mars', 'jupiter'),
                this.drawAspect(this.planets.mars, this.planets.saturn, 'mars', 'saturn'),
                this.drawAspect(this.planets.mars, this.planets.uranus, 'mars', 'uranus'),
                this.drawAspect(this.planets.mars, this.planets.neptune, 'mars', 'neptune'),
                this.drawAspect(this.planets.mars, this.planets.pluto, 'mars', 'pluto'),

                this.drawAspect(this.planets.moon, this.planets.jupiter, 'moon', 'jupiter'),
                this.drawAspect(this.planets.moon, this.planets.saturn, 'moon', 'saturn'),
                this.drawAspect(this.planets.moon, this.planets.uranus, 'moon', 'uranus'),
                this.drawAspect(this.planets.moon, this.planets.neptune, 'moon', 'neptune'),
                this.drawAspect(this.planets.moon, this.planets.pluto, 'moon', 'pluto'),

                this.drawAspect(this.planets.jupiter, this.planets.saturn, 'jupiter', 'saturn'),
                this.drawAspect(this.planets.jupiter, this.planets.uranus, 'jupiter', 'uranus'),
                this.drawAspect(this.planets.jupiter, this.planets.neptune, 'jupiter', 'neptune'),
                this.drawAspect(this.planets.jupiter, this.planets.pluto, 'jupiter', 'pluto'),

                this.drawAspect(this.planets.saturn, this.planets.uranus, 'saturn', 'uranus'),
                this.drawAspect(this.planets.saturn, this.planets.neptune, 'saturn', 'neptune'),
                this.drawAspect(this.planets.saturn, this.planets.pluto, 'saturn', 'pluto'),

                this.drawAspect(this.planets.uranus, this.planets.neptune, 'uranus', 'neptune'),
                this.drawAspect(this.planets.uranus, this.planets.pluto, 'uranus', 'pluto'),

                this.drawAspect(this.planets.neptune, this.planets.pluto, 'neptune', 'pluto'),
            ],
            planets: [
                this.drawSun(),
                this.drawMercury(),
                this.drawVenus(),
                this.drawMars(),
                this.drawMoon(),
                this.drawJupiter(),
                this.drawSaturn(),
                this.drawUranus(),
                this.drawNeptune(),
                this.drawPluto()
            ],
        };

        this.drawn.planets = this.correctCollidingPlanets(this.drawn.planets);

        return this.drawn;
    }

    describeArc(radius, startDegree, endDegree) {
        const end = Calc.getPointOnCircle(radius, startDegree, 0); // bricolage a tester avec autre chose que 0 ou 1.15
        const largeArcFlag = endDegree - startDegree <= 180 ? '0' : '1';

        const d = [
          'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(' ');

        return d;
    }

    drawAscendant(sign, degre) {
        if (sign === null && degre === null) {
            // continue
        } else {
            const radius = zodiac.radius.innerAuxiliary;
            const point1 = Calc.getPointOnCircle(radius, ((sign - 1) * 30) + degre, 0);
            const point2 = Calc.getPointOnCircle(radius, ((sign - 1) * 30) + degre, -10);

            const zodiacAsc = this.snap.line(point1.x, point1.y, point2.x, point2.y).attr(
                {
                    fill: '#FFF',
                    stroke: '#000',
                    strokeWidth: 0.2
                }
            );
        }

        return degre;
    }

    drawZodiacCircles() {
        const circles = {
            outer: this.snap.circle(0, 0, zodiac.radius.outer).attr({ fill: '#FFF', stroke: '#000', strokeWidth: 0.2 }),
            inner: this.snap.circle(0, 0, zodiac.radius.inner).attr({ fill: '#FFF', stroke: '#000', strokeWidth: 0.5 }),
            innerAuxiliary: this.snap.circle(0, 0, zodiac.radius.innerAuxiliary).attr({ fill: '#FFF', stroke: '#000', strokeWidth: 0.5 }),
        };

        circles.outer.addClass('zodiac-circle-outer');
        circles.inner.addClass('zodiac-circle-inner');
        circles.innerAuxiliary.addClass('zodiac-circle-inner-auxiliary');

        return circles;
    }

    drawZodiacDegrees() {
        const degrees = [];

        for (let degree = 0; degree < 360; degree++) {
            const radius = zodiac.radius.innerAuxiliary;
            const offsetFromRadius = 1;

            const point1 = Calc.getPointOnCircle(radius, degree, 0);
            const point2 = Calc.getPointOnCircle(radius, degree, offsetFromRadius);

            const zodiacDegree = this.snap.line(point1.x, point1.y, point2.x, point2.y).attr(
                {
                    fill: '#FFF',
                    stroke: '#000',
                    strokeWidth: 0.2
                }
            );
            zodiacDegree.attr({
                index: degree
            });
            zodiacDegree.addClass('zodiac-degree');
            zodiacDegree.addClass('zodiac-degree-' + degree);

            degrees.push({
                meta: {
                degree,
                point1,
                point2
                },
                zodiacDegree
            });
        }

        return degrees;
    }

    drawZodiacSigns(startSign, signDegree) {
        const zodiacSignImageWidth = 3;
        const zodiacSignImageHeight = 3;

        const signs = [];

        const ascendantDegreeCorrection = zodiac.validateSignDegree(signDegree);
        const startSignIndex = zodiac.getStartSignIndex(startSign);

        for (let sign = 0; sign <= 11; sign++) {
            let signIndex = null;
            const regularIndex = startSignIndex + sign;
            const isIndexOutOfBound = (regularIndex > 11);
            if (isIndexOutOfBound) {
                signIndex = regularIndex - 12;
            } else {
                signIndex = regularIndex;
            }
            const signObj = zodiac.signs[signIndex];

            const degree = sign * 30 - ascendantDegreeCorrection;
            const degreeBetweenSigns = degree + 15;
            const degreePreviousSign = degree - 30;
            const degreeNextSign = degree + 30;

            const topLeftPoint = Calc.getPointOnCircle(zodiac.radius.outer, degree, 0);
            const topRightPoint = Calc.getPointOnCircle(zodiac.radius.innerAuxiliary, degree, 0);
            const rightArcDescription = this.describeArc(zodiac.radius.innerAuxiliary, degreeNextSign, degree);
            const bottomLeftPoint = Calc.getPointOnCircle(zodiac.radius.outer, degreeNextSign, 0);
            const leftArcDescription = this.describeArc(zodiac.radius.outer, degreeNextSign, degree);

            let zodiacSignBackground;

            if (signObj.element.toLowerCase() === 'fire') {
                zodiacSignBackground = this.snap.path([
                    'M', topLeftPoint.x, topLeftPoint.y,
                    'L', topRightPoint.x, topRightPoint.y,
                    rightArcDescription,
                    'L', bottomLeftPoint.x, bottomLeftPoint.y,
                    'M', topLeftPoint.x, topLeftPoint.y,
                    leftArcDescription,
                    // 'M', topLeftPoint.x, topLeftPoint.y,
                    // 'Z'
                ].join(' ')).attr({fill: elements.getElements().fire.fillColor});
            }

            if (signObj.element.toLowerCase() === 'wind') {
                zodiacSignBackground = this.snap.path([
                    'M', topLeftPoint.x, topLeftPoint.y,
                    'L', topRightPoint.x, topRightPoint.y,
                    rightArcDescription,
                    'L', bottomLeftPoint.x, bottomLeftPoint.y,
                    'M', topLeftPoint.x, topLeftPoint.y,
                    leftArcDescription,
                    // 'M', topLeftPoint.x, topLeftPoint.y,
                    // 'Z'
                ].join(' ')).attr({fill: elements.getElements().wind.fillColor});
            }

            if (signObj.element.toLowerCase() === 'earth') {
                zodiacSignBackground = this.snap.path([
                    'M', topLeftPoint.x, topLeftPoint.y,
                    'L', topRightPoint.x, topRightPoint.y,
                    rightArcDescription,
                    'L', bottomLeftPoint.x, bottomLeftPoint.y,
                    'M', topLeftPoint.x, topLeftPoint.y,
                    leftArcDescription,
                    // 'M', topLeftPoint.x, topLeftPoint.y,
                    // 'Z'
                ].join(' ')).attr({fill: elements.getElements().earth.fillColor});
            }

            if (signObj.element.toLowerCase() === 'water') {
                zodiacSignBackground = this.snap.path([
                    'M', topLeftPoint.x, topLeftPoint.y,
                    'L', topRightPoint.x, topRightPoint.y,
                    rightArcDescription,
                    'L', bottomLeftPoint.x, bottomLeftPoint.y,
                    'M', topLeftPoint.x, topLeftPoint.y,
                    leftArcDescription,
                    // 'M', topLeftPoint.x, topLeftPoint.y,
                    // 'Z'
                ].join(' ')).attr({fill: elements.getElements().water.fillColor});
            }

            const signElementClass = 'zodiac-sign-element-' + signObj.element;
            const signNameClass = 'zodiac-sign-' + signObj.name.toLowerCase();
            zodiacSignBackground.addClass('zodiac-sign');
            zodiacSignBackground.addClass(signElementClass);
            zodiacSignBackground.addClass(signNameClass);



            const zodiacSignPosition = Calc.getPointOnCircle(zodiac.radius.betweenOuterInner, degreeBetweenSigns, 0);
            const zodiacSignImagePositionX = zodiacSignPosition.x - zodiacSignImageWidth / 2;
            const zodiacSignImagePositionY = zodiacSignPosition.y - zodiacSignImageHeight / 2;
            const zodiacSignSymbol = this.snap.image(signObj.imageUrl,
                                                        zodiacSignImagePositionX,
                                                        zodiacSignImagePositionY,
                                                        zodiacSignImageWidth,
                                                        zodiacSignImageHeight);
            const meta = {};
            Object.assign(meta, signObj);
            meta['degree'] = {
                self: degree,
                nextSign: degreeNextSign,
                previousSign: degreePreviousSign
            };
            meta['position'] = zodiacSignPosition;

            signs.push({
                meta,
                symbol: zodiacSignSymbol,
                background: zodiacSignBackground
            });
        }
        return signs;
    }

    drawHousesAxes(degre, hasHouses) {
        const axis = [];
        if (hasHouses) {

            const ascendantDescendantAxis = this.drawAscendantDescendantAxis(degre);
            axis.push(ascendantDescendantAxis);

            const house2house8Axis = this.drawHouse2House8Axis(degre);
            axis.push(house2house8Axis);

            const house3house9Axis = this.drawHouse3House9Axis(degre);
            axis.push(house3house9Axis);

            const immumMediumCoelliAxis = this.drawHouse4House10Axis(degre);
            axis.push(immumMediumCoelliAxis);

            const house5house11Axis = this.drawHouse5House11Axis(degre);
            axis.push(house5house11Axis);

            const house6house12Axis = this.drawHouse6House12Axis(degre);
            axis.push(house6house12Axis);
        }

        return axis;
    }

    drawAscendantDescendantAxis(degre) {
        const ascendantDegree = 0;
        const ascendantPoint = Calc.getPointOnCircle(zodiac.radius.inner, ascendantDegree + degre, 0);
        const descendantPoint = Calc.getPointOnCircle(zodiac.radius.inner, Calc.getOppositeDegree(ascendantDegree + degre), 0);
        const ascendantDescendantAxis = this.snap.line(ascendantPoint.x, ascendantPoint.y, descendantPoint.x, descendantPoint.y).attr(
            {
                fill: '#FFF',
                stroke: '#b97a56',
                strokeWidth: 0.2
            }
        );
        ascendantDescendantAxis.addClass('house-axis');
        ascendantDescendantAxis.addClass('house-axis-ascendant-descendant');
        return ascendantDescendantAxis;
    }

    drawHouse2House8Axis(degre) {
        const house2Degree = (this.houses.hasOwnProperty('axes') &&
                            this.houses.axes.hasOwnProperty('axis2to8')) ? this.houses.axes.axis2to8 : null;
        const house2Point = Calc.getPointOnCircle(zodiac.radius.inner, house2Degree + degre, 0);
        const house8Point = Calc.getPointOnCircle(zodiac.radius.inner, Calc.getOppositeDegree(house2Degree + degre), 0);
        const house2house8Axis = this.snap.line(house2Point.x, house2Point.y, house8Point.x, house8Point.y).attr(
            {
                fill: '#FFF',
                stroke: '#b97a56',
                strokeWidth: 0.2
            }
        );
        house2house8Axis.addClass('house-axis');
        house2house8Axis.addClass('house-axis-2-8');
        return house2house8Axis;
    }

    drawHouse3House9Axis(degre) {
        const house3Degree = (this.houses.hasOwnProperty('axes') &&
                            this.houses.axes.hasOwnProperty('axis3to9')) ? this.houses.axes.axis3to9 : null;
        const house3Point = Calc.getPointOnCircle(zodiac.radius.inner, house3Degree + degre, 0);
        const house9Point = Calc.getPointOnCircle(zodiac.radius.inner, Calc.getOppositeDegree(house3Degree + degre), 0);
        const house3house9Axis = this.snap.line(house3Point.x, house3Point.y, house9Point.x, house9Point.y).attr(
            {
                fill: '#FFF',
                stroke: '#b97a56',
                strokeWidth: 0.2
            }
        );
        house3house9Axis.addClass('house-axis');
        house3house9Axis.addClass('house-axis-3-9');
        return house3house9Axis;
    }

    drawHouse4House10Axis(degre) {
        const house4Degree = (this.houses.hasOwnProperty('axes') &&
                                this.houses.axes.hasOwnProperty('axis4to10')) ? this.houses.axes.axis4to10 : null;
        const immumCoelliPoint = Calc.getPointOnCircle(zodiac.radius.inner, house4Degree + degre, 0);
        const mediumCoelliPoint = Calc.getPointOnCircle(zodiac.radius.inner, Calc.getOppositeDegree(house4Degree + degre), 0);
        const immumMediumCoelliAxis = this.snap.line(immumCoelliPoint.x, immumCoelliPoint.y, mediumCoelliPoint.x, mediumCoelliPoint.y).attr(
            {
                fill: '#FFF',
                stroke: '#b97a56',
                strokeWidth: 0.2
            }
        );
        immumMediumCoelliAxis.addClass('house-axis');
        immumMediumCoelliAxis.addClass('house-axis-immum-medium');
        return immumMediumCoelliAxis;
    }

    drawHouse5House11Axis(degre) {
        const house5Degree = (this.houses.hasOwnProperty('axes') &&
                            this.houses.axes.hasOwnProperty('axis5to11')) ? this.houses.axes.axis5to11 : null;
        const house5Point = Calc.getPointOnCircle(zodiac.radius.inner, house5Degree + degre, 0);
        const house11Point = Calc.getPointOnCircle(zodiac.radius.inner, Calc.getOppositeDegree(house5Degree + degre), 0);
        const house5house11Axis = this.snap.line(house5Point.x, house5Point.y, house11Point.x, house11Point.y).attr(
            {
                fill: '#FFF',
                stroke: '#b97a56',
                strokeWidth: 0.2
            }
        );
        house5house11Axis.addClass('house-axis');
        house5house11Axis.addClass('house-axis-5-11');
        return house5house11Axis;
    }

    drawHouse6House12Axis(degre) {
        const house6Degree = (this.houses.hasOwnProperty('axes') &&
                            this.houses.axes.hasOwnProperty('axis6to12')) ? this.houses.axes.axis6to12 : null;
        const house6Point = Calc.getPointOnCircle(zodiac.radius.inner, house6Degree + degre, 0);
        const house12Point = Calc.getPointOnCircle(zodiac.radius.inner, Calc.getOppositeDegree(house6Degree + degre), 0);
        const house6house12Axis = this.snap.line(house6Point.x, house6Point.y, house12Point.x, house12Point.y).attr(
            {
                fill: '#FFF',
                stroke: '#b97a56',
                strokeWidth: 0.2
            }
        );
        house6house12Axis.addClass('house-axis');
        house6house12Axis.addClass('house-axis-6-12');
        return house6house12Axis;
    }

    drawPlanet(planet, degree) {
        const linePoint1 = Calc.getPointOnCircle(zodiac.radius.inner, degree, 0);
        const linePoint2 = Calc.getPointOnCircle(zodiac.radius.inner, degree, 0); // 1 pas très beau 10 pour comprendre
        const planetAuxiliaryLine = this.snap.line(linePoint1.x, linePoint1.y, linePoint2.x, linePoint2.y).attr(
            {
                fill: '#FFF',
                stroke: '#000',
                strokeWidth: 0.3
            }
        );
        planetAuxiliaryLine.addClass('planet-auxiliary-line');

        const planetBackgroundPosition = Calc.getPointOnCircle(zodiac.radius.inner, degree, this.PLANET_RADIUS_OFFSET);
        const planetBackgroundRadius = this.getPlanetBackgroundRadius();
        const planetBackground = this.snap.circle(planetBackgroundPosition.x, planetBackgroundPosition.y, planetBackgroundRadius).attr(
            { fill: '#AAA' }
        );
        planetBackground.addClass('planet-background');

        const planetSymbolPosition = this.getPlanetSymbolPosition(planetBackgroundPosition);
        const planetSymbol = this.snap.image(planet.imageUrl,
                            planetSymbolPosition.x,
                            planetSymbolPosition.y,
                            this.PLANET_IMAGE_WIDTH,
                            this.PLANET_IMAGE_HEIGHT).click(function () {
                                alert(planet.name);
                             });

        const meta = {};
        Object.assign(meta, planet);
        meta['degree'] = degree;
        meta['position'] = planetBackgroundPosition;

        return {
            symbol: planetSymbol,
            background: planetBackground,
            meta
        };
    }

    getPlanetSymbolPosition(planetBackgroundPosition) {
        const x = planetBackgroundPosition.x - this.PLANET_IMAGE_WIDTH / 2;
        const y = planetBackgroundPosition.y - this.PLANET_IMAGE_HEIGHT / 2;
        return {
            x,
            y
        };
    }

    getPlanetBackgroundRadius() {
        if (this.PLANET_IMAGE_WIDTH > this.PLANET_IMAGE_HEIGHT) {
            return this.PLANET_IMAGE_WIDTH / 2;
        } else {
            return this.PLANET_IMAGE_HEIGHT / 2;
        }
    }

    drawSun() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
            return elem.name === 'Sun';
        }), this.planets.sun);
    }

    drawMercury() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Mercury';
        }), this.planets.mercury);
    }

    drawVenus() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Venus';
        }), this.planets.venus);
    }

    drawMars() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Mars';
        }), this.planets.mars);
    }

    drawMoon() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Moon';
        }), this.planets.moon);
    }

    drawJupiter() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Jupiter';
        }), this.planets.jupiter);
    }

    drawSaturn() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Saturn';
        }), this.planets.saturn);
    }

    drawUranus() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Uranus';
        }), this.planets.uranus);
    }

    drawNeptune() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Neptune';
        }), this.planets.neptune);
    }

    drawPluto() {
        return this.drawPlanet(planets.getPlanet().find((elem) => {
          return elem.name === 'Pluto';
        }), this.planets.pluto);
    }

    correctCollidingPlanets(planets) {
        planets = planets.sort((a, b) => {
            return a.meta.degree > b.meta.degree;
        });

        let planetsCollideInRow = 0;
        return planets.map((planet, i) => {
            const nextPlanetIndex = i + 1;

            if (nextPlanetIndex in planets) {
                const nextPlanet = planets[nextPlanetIndex];
                if (this.planetsDoCollide(planet.meta.degree, nextPlanet.meta.degree)) {
                    if (planetsCollideInRow === this.MAX_PLANET_COLLISION_CORRECTION) {
                        planetsCollideInRow = 0;
                    }
                    planetsCollideInRow++;

                    const correctedRadius = zodiac.radius.inner - (planetsCollideInRow * this.PLANET_COLLISION_CORRECTION_RADIUS);
                    if (correctedRadius <= 0) {
                        console.warn('Cannot draw colliding planets when the correction radius is below 0.');
                    }

                    const correctedBackgroundPosition = Calc.getPointOnCircle(correctedRadius,
                                                                                nextPlanet.meta.degree,
                                                                                this.PLANET_RADIUS_OFFSET);
                    const correctedBackgroundPositionForCircle = {
                        cx: correctedBackgroundPosition.x,
                        cy: correctedBackgroundPosition.y,
                    };

                    nextPlanet.background.attr(correctedBackgroundPositionForCircle);

                    const correctedPlanetSymbolPosition = this.getPlanetSymbolPosition(correctedBackgroundPosition);
                    nextPlanet.symbol.attr(correctedPlanetSymbolPosition);


                    planets[nextPlanetIndex].symbol = nextPlanet.symbol;
                    planets[nextPlanetIndex].background = nextPlanet.background;
                } else {
                    planetsCollideInRow = 0;
                }
            }
        return planet;
        });
    }

    planetsDoCollide(currentPlanetDegree, nextPlanetDegree) {
        let lowerBound = currentPlanetDegree - this.PLANET_COLLISION_MARGIN_IN_DEGREE;
        let upperBound = currentPlanetDegree + this.PLANET_COLLISION_MARGIN_IN_DEGREE;

        if (upperBound > 360) {
            upperBound = upperBound - 360;
        } else if (lowerBound < 0) {
            lowerBound = lowerBound + 360;
        }

        return (lowerBound <= nextPlanetDegree && nextPlanetDegree <= upperBound);
    }

    drawAspect(planetA, planetB, planetNameA, planetNameB) {
        let degre = 0;
        let aspect = '';
        // Liaison Soleil à Lune, bidouille
        if (planetA != null && planetB != null) {
            const linePoint1 = Calc.getPointOnCircle(zodiac.radius.inner, planetA, 0);
            const linePoint2 = Calc.getPointOnCircle(zodiac.radius.inner, planetB, 0);
            // console.log('zodiac.radius.inner: ' + zodiac.radius.inner);
            // console.log('sun: ' + this.planets.sun + ' ' + linePoint1.x + ', ' + linePoint1.y);
            // console.log('saturn: ' + this.planets.moon + ' ' + linePoint2.x + ', ' + linePoint2.y);

            // calcul de la distance entre sun et saturn
            const a = linePoint1.x - linePoint2.x;
            const b = linePoint1.y - linePoint2.y;
            // http://www.alloprof.qc.ca/BV/pages/m1311.aspx
            const c = Math.sqrt( Math.pow((a), 2) + Math.pow((b), 2) );
            // Mesure de l'angle entre sun et saturn
            // https://www.youtube.com/watch?v=OuYuf6IBkL0
            // circonférance : https://www.youtube.com/watch?v=hEppSPkvu8s
            const circ = 2 * Math.PI * zodiac.radius.inner;
            degre = (c * 360) / circ;
            // console.log('degre: ' + degre);
            if ((degre >= 350 && degre <= 360) || (degre >= 0 && degre <= 10)) {
                aspect = 'conjonction';
            }
            if (degre >= 180 - 8 && degre <= 180 + 8) {
                aspect = 'opposition';
            }
            if (degre >= 120 - 7 && degre <= 120 + 7) {
                aspect = 'trigone';
            }
            if (degre >= 90 - 7 && degre <= 90 + 7) {
                aspect = 'quadrature';
            }
            if (degre >= 60 - 5 && degre <= 60 + 7) {
                aspect = 'sextile';
            }
            if (degre >= 150 - 2 && degre <= 150 + 2) {
                aspect = 'quinconce';
            }
            if (degre >= 135 - 1 && degre <= 135 + 1) {
                aspect = 'sesqui-carré';
            }
            if (degre >= 45 - 1 && degre <= 45 + 1) {
                aspect = 'demi-carré';
            }
            if (degre >= 30 - 1 && degre <= 30 + 1) {
                aspect = 'demi-sextile';
            }
            let planetAuxiliaryLine;
            if (aspect !== '') {
                switch (aspect) {
                    case 'quadrature' :
                        planetAuxiliaryLine = this.snap.line(linePoint1.x, linePoint1.y, linePoint2.x, linePoint2.y).attr(
                            {
                                fill: '#FFF',
                                stroke: '#000',
                                strokeWidth: 0.3,
                                'stroke-dasharray': '8px, 4px'
                            }
                        );
                        break;
                    default:
                        planetAuxiliaryLine = this.snap.line(linePoint1.x, linePoint1.y, linePoint2.x, linePoint2.y).attr(
                            {
                                fill: '#FFF',
                                stroke: '#000',
                                strokeWidth: 0.3
                            }
                        );
                        break;
                }
            }
        }

        return {
            planetA: {
                nom: planetNameA,
                pos: planetA
            },
            planetB: {
                nom: planetNameB,
                pos: planetB
            },
            radius: degre,
            aspect: aspect
        };
    }
}
export let drawer = new Drawer();

