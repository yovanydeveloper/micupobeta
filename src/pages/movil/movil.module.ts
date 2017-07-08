import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovilPage } from './movil';

@NgModule({
  declarations: [
    MovilPage,
  ],
  imports: [
    IonicPageModule.forChild(MovilPage),
  ],
  exports: [
  MovilPage
  ]
})
export class MovilPageModule {}
