import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController,Platform, AlertController} from 'ionic-angular';
import {MovilPage} from '../movil/movil';
import {CorreoPage} from '../correo/correo';


@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

    myForm:FormGroup;

    constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public menu: MenuController,
    public formBuilder:FormBuilder
  ) {
     this.myForm = this.createMyForm();
   }
   private createMyForm(){
return this.formBuilder.group({
 passwordRetry: this.formBuilder.group({
   password: ['', [Validators.required]],
   passwordConfirmation:  ['', [Validators.required]],
 }),
});
}
    signup() {
      this.navCtrl.push(MovilPage);
    }
    login() {
      this.navCtrl.setRoot(CorreoPage);
    }
    submitForm(value: any):void{
      console.log('Form submited!')
      console.log(value);
    }
}
