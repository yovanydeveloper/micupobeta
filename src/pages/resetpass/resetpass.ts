import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginPage} from '../login/login';
/**
 * Generated class for the ResetpassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-resetpass',
  templateUrl: 'resetpass.html',
})
export class ResetpassPage {

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

    submitForm(value: any):void{
      console.log('Form submited!')
      console.log(value);
    }
  }
