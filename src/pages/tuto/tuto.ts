import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-tuto',
  templateUrl: 'tuto.html'
})
export class TutoPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string ="Omitir";

  constructor(public navCtrl: NavController) {

  }

skip() {
this.navCtrl.push(HomePage);

}


slideChange()
{
if(this.slides.isEnd())
this.skipMsg="¡Vamos!";
}
}

