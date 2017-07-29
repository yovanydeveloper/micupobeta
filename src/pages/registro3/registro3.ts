import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {Registro2Page} from '../registro2/registro2';
import {Registro4Page} from '../registro4/registro4';


@IonicPage()
@Component({
  selector: 'page-registro3',
  templateUrl: 'registro3.html',
})
export class Registro3Page {
    myForm:FormGroup;

    constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public menu: MenuController,
    public fb:FormBuilder
  ) {
     this.myForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        uni: ['', [Validators.required]],
        cargo: ['', [Validators.required]],
     });
   }
    signup() {
      this.navCtrl.push(Registro2Page);
    }
    login() {
      this.navCtrl.setRoot(Registro4Page);
    }


    submitForm(value: any):void{
      console.log('Form submited!')
      console.log(value);
    }
}
