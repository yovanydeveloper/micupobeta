import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-tuto',
  templateUrl: 'tuto.html'
})
export class TutoPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string ="Omitir";


  constructor(public navCtrl: NavController, public menu: MenuController, public nav:NavController) {

  }

skip() {
 this.nav.setRoot(HomePage);

}


slideChange()
{
if(this.slides.isEnd())
this.skipMsg ="¡Vamos!";
}
   ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  } 
}