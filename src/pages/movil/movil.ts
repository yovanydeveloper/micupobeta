import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {PasswordPage} from "../password/password";

@IonicPage()
@Component({
  selector: 'page-movil',
  templateUrl: 'movil.html',
})
export class MovilPage {

    myForm:FormGroup;

    constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public menu: MenuController,
    public fb:FormBuilder
  ) {
     this.myForm = this.fb.group({
       cel: ['', [Validators.required,  Validators.minLength(10)]],
     });
   }
    signup() {
      this.navCtrl.push(RegisterPage);
    }
    login() {
      this.navCtrl.setRoot(PasswordPage);
    }
    submitForm(value: any):void{
      console.log('Form submited!')
      console.log(value);
    }
}
