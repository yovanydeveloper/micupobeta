import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {Registro1Page} from '../registro1/registro1';
import {HomePage} from '../home/home';
import {ResetpssPage} from '../resetpss/resetpss';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  myForm:FormGroup;

  constructor(
  public navCtrl: NavController,
  public platform: Platform,
  public alertCtrl: AlertController,
  public menu: MenuController,
  public fb:FormBuilder
) {
   this.myForm = this.fb.group({
     email: ['', [Validators.required, Validators.email ]],
     password: ['', [Validators.required ]],
   });
 }
  signup() {
    this.navCtrl.push(Registro1Page);
  }
  login() {
    this.navCtrl.setRoot(HomePage);
  }
  submitForm(value: any):void{
    console.log('Form submited!')
    console.log(value);
  }
  goToResetPassword(){
  this.navCtrl.push(ResetpssPage);
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
