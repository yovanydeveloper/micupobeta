import { Component } from '@angular/core';
import {MenuController, NavController } from 'ionic-angular';
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
  constructor(public nav: NavController, public menu: MenuController,) {}

  signup() {
    this.nav.setRoot(RegisterPage);
  }

  login() {
    this.nav.setRoot(MovilPage);
  }
    ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  } 
}

