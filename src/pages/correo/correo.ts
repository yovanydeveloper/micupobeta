import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {MovilPage} from '../movil/movil';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html'
})
export class CorreoPage {
  constructor(public nav: NavController) {}

  signup() {
    this.nav.setRoot(RegisterPage);
  }

  login() {
    this.nav.setRoot(MovilPage);
  }
}

