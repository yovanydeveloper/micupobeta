import { Component } from '@angular/core';
import { MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home';
declare var google: any;

import { UsuarioService } from "../../providers/usuario";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  correo:string = "";
  pass:string = "";

 tabBarElement: any;
  constructor(public nav: NavController,
  public platform: Platform,
  public alertCtrl: AlertController,
  public menu: MenuController,
  public navCtrl: NavController,
  private _us: UsuarioService) {
  }

  ingresar(){

    this._us.ingresar( this.correo, this.pass)
            .subscribe( ()=> {



            } )

  }

  signup() {
    this.nav.setRoot(RegisterPage);
  }

  login() {
    this.nav.setRoot(HomePage);
  }
 Nomenu() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
