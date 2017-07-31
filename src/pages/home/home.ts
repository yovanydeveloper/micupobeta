import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 lat: number = 4.793648500000001;
  lng: number = 75.68910249999999;

     
    constructor(public navCtrl: NavController,  public nav: NavController) {
       
    }
 
  login() {
     
  }

    
}

