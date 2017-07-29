import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {Registro2Page} from '../registro2/registro2';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-registro1',
  templateUrl: 'registro1.html'
})
export class Registro1Page {

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
    this.navCtrl.setRoot(Registro2Page);
  }
  submitForm(value: any):void{
    console.log('Form submited!')
    console.log(value);
  }
}
