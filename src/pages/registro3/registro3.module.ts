import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Registro3Page } from './registro3';

@NgModule({
  declarations: [
    Registro3Page,
  ],
  imports: [
    IonicPageModule.forChild(Registro3Page),
  ],
  exports: [
  Registro3Page
  ]
})
export class Registro3PageModule {}
