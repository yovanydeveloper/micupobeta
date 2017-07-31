import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {Registro2Page} from '../registro2/registro2';
import {InicioPage} from '../inicio/inicio';

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
    this.navCtrl.push(InicioPage);
  }
  login() {
    this.navCtrl.setRoot(Registro2Page);
  }
  submitForm(value: any):void{
    console.log('Form submited!')
    console.log(value);
  }


 ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }  
  ionViewCanEnter() {
   
    this.menu.enable(false);
  } 

}
