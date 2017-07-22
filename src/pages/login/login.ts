import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
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
    this.navCtrl.push(RegisterPage);
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
}
