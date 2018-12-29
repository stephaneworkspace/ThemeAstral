import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';     // Add this
import { CircleCanvasComponent } from './bidouille/circle-canvas/circle-canvas.component';  // Add this

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'circle-canvas',
    component: CircleCanvasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
