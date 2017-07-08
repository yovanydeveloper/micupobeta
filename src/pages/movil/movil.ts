import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PasswordPage} from "../password/password";
import {CorreoPage} from "../correo/correo";
/**
 * Generated class for the MovilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-movil',
  templateUrl: 'movil.html',
})
export class MovilPage {
  constructor(public nav: NavController) {}

  signup() {
    this.nav.setRoot(CorreoPage);
  }

  login() {
    this.nav.setRoot(PasswordPage);
  }
}

