import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public nav: NavController,public menu: MenuController) {}

  signup() {
    this.nav.setRoot(MovilPage);
  }

  login() {
    this.nav.setRoot(TutoPage);
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
