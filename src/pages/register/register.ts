import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {CorreoPage} from "../correo/correo";

/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  constructor(public nav:NavController) {
  }

  signup() {
    this.nav.setRoot(LoginPage);
  }

  loginup() {
    this.nav.setRoot(CorreoPage);
  }
}
