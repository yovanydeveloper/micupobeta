import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import { LoginPage} from '../login/login';
import {PasswordPage} from '../password/password';

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html'
})
export class CorreoPage {

    myForm:FormGroup;

    constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public menu: MenuController,
    public fb:FormBuilder
  ) {
     this.myForm = this.fb.group({
       email: ['', [Validators.required ]],
     });
   }
    signup() {
      this.navCtrl.push(PasswordPage);
    }
    login() {
      this.navCtrl.setRoot(LoginPage);
    }
    submitForm(value: any):void{
      console.log('Form submited!')
      console.log(value);
    }
}
