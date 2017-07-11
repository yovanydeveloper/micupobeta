import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public nav: NavController, public menu: MenuController) {}

  signup() {
    this.nav.setRoot(CorreoPage);
  }

  login() {
    this.nav.setRoot(PasswordPage);
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

