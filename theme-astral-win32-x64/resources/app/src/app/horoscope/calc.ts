export class Calc {
    /**
     * Calculates a point on a zodiac circle.
     * http://www.onlinemathe.de/forum/Kreis-Punkte-auf-der-Linie-Berechnen
     * https://upload.wikimedia.org/wikipedia/commons/8/82/Sinus_en_cosinus.png
     *
     * @param radius The radius of the circle.
     * @param degree of the poit on the circle.
     * @param offsetFromRadius offset
     * @param traditionalDirection Calculate point starting (degree = 0) from ascendent and moving counter-clockwise. Defaults to true.
     * If set to false, the calculation starts from descendent and moves counter-clockwise.
     * @returns points x,y {{x: *, y: *}}
     */
    static getPointOnCircle(radius, degree, offsetFromRadius, traditionalDirection = true) {
        if (typeof radius === 'undefined' || typeof degree === 'undefined') {
            throw new Error('Degree and radius parameters required!');
        }

        degree = this.convertDegreeMinutesSecondsToFloat(degree);

        const xCenterPoint = 0;
        const yCenterPoint = 0;
        const degreeNormalized = degree * (Math.PI / 180.0);

        // Fixes JS bug of Math.sin(Math.PI) (or Math.cos(Math.PI)) not returning correct values on 0, 90, 180, 270, 360
        // degrees. See http://stackoverflow.com/q/6223616/3757139
        let xNormalized = null;
        if (this.isEachDegree(90, degree) && !this.isEachDegree(180, degree)) {
            xNormalized = 0;
        } else if (this.isEachDegree(180, degree) && !this.isEachDegree(360, degree)) {
            xNormalized = -1;
        } else if (this.isEachDegree(360, degree)) {
            xNormalized = 1;
        } else {
            xNormalized = Math.cos(degreeNormalized);
        }

        let yNormalized = null;
        if (this.isEachDegree(90, degree) && !this.isEachDegree(180, degree) && !this.isEachDegree(270, degree)) {
            yNormalized = 1;
        } else if (this.isEachDegree(180, degree) && !this.isEachDegree(270, degree)) {
            yNormalized = 0;
        } else if (this.isEachDegree(270, degree)) {
            yNormalized = -1;
        } else {
            yNormalized = Math.sin(degreeNormalized);
        }

        let x = null;
        let y = null;
        const ySvgInverse = true;

        if (offsetFromRadius) {
            x = xCenterPoint + (radius - offsetFromRadius) * xNormalized;
            y = yCenterPoint + (radius - offsetFromRadius) * yNormalized;
        } else {
            x = xCenterPoint + radius * xNormalized;
            y = yCenterPoint + radius * yNormalized;
        }

        if (ySvgInverse) {
            y = -y;
        }

        if (traditionalDirection) {
            x = -x;
            y = -y;
        }

        return {x, y};
    }

    static getOppositeDegree(degree) {
        if (degree < 180) {
            return degree + 180;
        } else {
            return degree - 180;
        }
    }

    static convertDegreeMinutesSecondsToFloat(degreeObj) {
        if (typeof degreeObj !== 'object') {
            return degreeObj;
        }

        let degree = null;
        let degreeMinutes = null;
        let degreeSeconds = null;

        if (degreeObj.hasOwnProperty('degree')) {
            degree = degreeObj.degree;
        } else {
            throw new Error('No degree property on degree-object.');
        }
        if (degree < 0 || degree > 360) {
            throw new Error('Degree must be between 0 and 360.');
        }

        degreeMinutes = (degreeObj.hasOwnProperty('minutes')) ? degreeObj.minutes : null;
        degreeSeconds = (degreeObj.hasOwnProperty('seconds')) ? degreeObj.seconds : null;
        if (0 <= degreeMinutes && degreeMinutes <= 60) {
            degreeMinutes = degreeMinutes * 1 / 60;
        }
        if (0 <= degreeSeconds && degreeSeconds <= 60) {
            /* tslint:disable */
            degreeSeconds = degreeSeconds * 1 / 60 ^ 2; // eslint-disable-line no-bitwise (don't work)
            /* tslint:enable */
        }

      return degree + degreeMinutes + degreeSeconds;
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    static isEachDegree(interval, degree) {
        return degree % interval === 0 && degree > 0;
    }
}
