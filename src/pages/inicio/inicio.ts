import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {LoginPage} from '../login/login';
/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
 splash = true;
 tabBarElement: any;
  constructor(public nav: NavController,
  public navCtrl: NavController, 
  public navParams: NavParams,
  public menu: MenuController,) {
  }
ionViewDidLoad() {
  // this.tabBarElement.style.display ='true';
     setTimeout(() => {
       this.splash = false;
   // this.tabBarElement.style.display ='flex';
     },4000);
   }

  signup() {
    this.nav.setRoot(RegisterPage);
  }

  login() {
    this.nav.setRoot(LoginPage);
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




 /* ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  */
