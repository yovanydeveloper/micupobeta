import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, MenuController,NavParams, NavController,Platform, AlertController} from 'ionic-angular';
import { LoginPage} from '../login/login';
import {Registro3Page} from '../registro3/registro3';

@IonicPage()
@Component({
  selector: 'page-registro4',
  templateUrl: 'registro4.html'
})
export class Registro4Page {

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
      this.navCtrl.push(Registro3Page);
    }
    login() {
      let prompt = this.alertCtrl.create({
        title: 'Genial!',
        subTitle: 'Ahora eres parte de Mi cupo, ahora disfruta de los beneficios del uso del carro compartido en tu universidad',
        buttons: [
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
