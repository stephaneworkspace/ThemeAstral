import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


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
  selector: 'app-circle-canvas',
  templateUrl: './circle-canvas.component.html',
  styleUrls: ['./circle-canvas.component.scss']
})
export class CircleCanvasComponent implements OnInit, AfterViewInit {

  private _arrayZodiac12: Array<XY>;
  private _arrayZodiac: Array<XY210>;

  private _size = 450;

  private _zodiac = {
    ascendant: {
      sign: 1,
      degree: 1.15
    }
  };

  @ViewChild('myCanvas') myCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
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
    /*
    context.beginPath();
    // trait par degré
    */
    let step = 2 * Math.PI / 12;
    let h = this._size * 0.5;
    let k = this._size * 0.5;
    let r = 216; // taille du trait
    let x = 0;
    let y = 0;
    /* let itemNumber = 4;

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
    */

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
  }
}
