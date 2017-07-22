import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorreoPage } from './correo';

@NgModule({
  declarations: [
    CorreoPage,
  ],
  imports: [
    IonicPageModule.forChild( CorreoPage ),
  ],
  exports: [
    CorreoPage
  ]
})
export class CorreoPageModule {}
