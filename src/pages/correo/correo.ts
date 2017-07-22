import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController,NavParams, NavController,Platform, AlertController} from 'ionic-angular';
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
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public menu: MenuController,
    public fb:FormBuilder
  ) {
     this.myForm = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
     });
   }
    signup() {
      this.navCtrl.push(PasswordPage);
    }
    login() {
      let prompt = this.alertCtrl.create({
        title: 'Genial!',
        subTitle: 'Para completar tu registro, has clic en el enlace, que acabamos de enviarte a tu correo institucional. Es necesario verificar que haces parte de la comunidad universitaria',
        buttons: [
          {
            text: 'Editar',
            handler: data => {
              console.log('Saved clicked');
              this.navCtrl.setRoot(CorreoPage);
            }
          },
          {
            text: 'Aceptar',
            handler: data => {
              console.log('Saved clicked');
              this.navCtrl.setRoot(LoginPage);
            }
          }
        ]
      })

      prompt.present();
    }
    submitForm(value: any):void{
      console.log('Form submited!')
      console.log(value);
    }
}
