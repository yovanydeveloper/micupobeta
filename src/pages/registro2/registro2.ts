import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import {Registro1Page} from "../registro1/registro1";
import {Registro3Page} from "../registro3/registro3";

@IonicPage()
@Component({
  selector: 'page-registro2',
  templateUrl: 'registro2.html',
})
export class Registro2Page {

    myForm:FormGroup;

    constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public menu: MenuController,
    public fb:FormBuilder
  ) {
     this.myForm = this.fb.group({
       cel: ['', [Validators.required,  Validators.minLength(7)]],
       password: ['', [Validators.required, Validators.minLength(6)]],
     });
   }
    signup() {
      this.navCtrl.push(Registro1Page);
    }
    login() {
      this.navCtrl.setRoot(Registro3Page);
    }
    submitForm(value: any):void{
      console.log('Form submited!')
      console.log(value);
    }
}
