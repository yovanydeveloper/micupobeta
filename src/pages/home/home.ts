import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';
import { FindingPage } from '../finding/finding';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;
     
    constructor(public navCtrl: NavController, public dataService: Data, public nav: NavController) {
        this.searchControl = new FormControl();
    }
 
  login() {
     this.nav.push(FindingPage);
  }

    ionViewDidLoad() {
 
        this.setFilteredItems();
 
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 
            this.searching = false;
            this.setFilteredItems();
 
        });
    }
 
    onSearchInput(){
        this.searching = true;
    }
 
    setFilteredItems() {
 
        this.items = this.dataService.filterItems(this.searchTerm);
 
    }
/*
   nextLoad() {
for(let i=this.items;i< this.items+10; i++){
this.items.push(i);   
 }
    this.items +- 10;
}
*/
}
