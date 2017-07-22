import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";


@IonicPage()
@Component({
  selector: 'page-resetpss',
  templateUrl: 'resetpss.html',
})
export class ResetpssPage {

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
     password: ['', [Validators.required, Validators.minLength(5)]],
   });
 }
 signup() {
   this.navCtrl.push(LoginPage);
 }
 login() {
   let prompt = this.alertCtrl.create({
     title: 'Contraseña Actualizada!',
     subTitle: 'Tu contraseña ha sido cambiada Satisfactoriamente',
     buttons: [
       {
         text: 'Listo',
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
/*
export class ChancePassPage {
    constructor(public nav: NavController, public platform:Platform,
                public alertCtrl: AlertController) {
                  // show rating popup
                  setTimeout(() => {
                    this.showRating();
                  }, 3000);
                }
// show rating popup
login() {
  let prompt = this.alertCtrl.create({
    title: 'Solicitud Enviada',
    message: 'El usuario indicado confirmara tu solicitud y te enviara toda la informacion del sitio y lugar de recogida',
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancel clicked');
          this.nav.setRoot(ResetpssPage);
        }
      },
      {
        text: 'Confirmar',
        handler: data => {
          console.log('Saved clicked');
          this.nav.setRoot(LoginPage);
        }
      }
    ]
  })

  prompt.present();
}
}
*/
