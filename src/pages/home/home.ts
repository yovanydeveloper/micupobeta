import { Component } from '@angular/core';
//import { Geolocation } from '@ionic-native/geolocation';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;
     
    constructor(public navCtrl: NavController,  public nav: NavController) {
        this.searchControl = new FormControl();
    }
 
  login() {
     
  }

    
}

