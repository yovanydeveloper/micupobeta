import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetpssPage } from './resetpss';

@NgModule({
  declarations: [
    ResetpssPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetpssPage),
  ],
  exports: [
  ResetpssPage
  ]
})
export class ResetpssPageModule {}
