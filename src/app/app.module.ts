import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- here
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CircleCanvasComponent } from './bidouille/circle-canvas/circle-canvas.component'; //



@NgModule({
  declarations: [
    AppComponent,
    CircleCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
