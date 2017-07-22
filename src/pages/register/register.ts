import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {MovilPage} from '../movil/movil';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  myForm:FormGroup;

  constructor(
  public navCtrl: NavController,
  public platform: Platform,
  public alertCtrl: AlertController,
  public menu: MenuController,
  public fb:FormBuilder
) {
   this.myForm = this.fb.group({
     name: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(30)]],
     lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30) ]],
   });
 }
  signup() {
    this.navCtrl.push(LoginPage);
  }
  login() {
    this.navCtrl.setRoot(MovilPage);
  }
  submitForm(value: any):void{
    console.log('Form submited!')
    console.log(value);
  }
}
