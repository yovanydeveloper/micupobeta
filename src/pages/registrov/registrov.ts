import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkFirstCharacterValidator } from '../../validators/customValidators';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-registrov',
  templateUrl: 'registrov.html'
})

export class RegistroViajePage {
  userAcc = { hora: {} };
	authForm : FormGroup;

	constructor(public nav: NavController, public navCtrl: NavController, fb: FormBuilder, private formBuilder: FormBuilder) {
		this.authForm = fb.group({
			'destino' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])],
			  hora: this.formBuilder.group({
        date: [''],
      }),
		  'placa': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(7), checkFirstCharacterValidator(/^\d/i)])],
		  'Cupos' : 'e'
		})  
	}
	
	submitForm(value: any):void{
		console.log('Form submited!')
		console.log(value);
	}

	 formSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log('user:  ', value);
    console.log('valid:  ', valid);
  }
	
	 login() {
    this.nav.setRoot(HomePage);
  }

}
export interface User {
 hora : {
    date: Date;
  }
}