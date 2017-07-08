import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TutoPage} from "../tuto/tuto";
import {MovilPage} from "../movil/movil";
/**
 * Generated class for the PasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  constructor(public nav: NavController) {}

  signup() {
    this.nav.setRoot(MovilPage);
  }

  login() {
    this.nav.setRoot(TutoPage);
  }
}
