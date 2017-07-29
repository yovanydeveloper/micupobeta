import {Component} from '@angular/core';
import { Platform, MenuController} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';
// import pages

import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {InicioPage} from '../pages/inicio/inicio';
import {NotificationPage} from '../pages/notification/notification';


@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;

  public menu: MenuController

  public pages = [
    {
      title: 'Inicio',
      icon: 'ios-home-outline',
      count: 0,
      component: HomePage
    },
    {
      title: 'Mis viajes',
      icon: 'ios-notifications-outline',
      count: 3,
      component: NotificationPage
    },
    {
      title: 'Cerrar Sesion',
      icon: 'ios-log-out-outline',
      count: 0,
      component: LoginPage
    }
  ];

  constructor(public platform: Platform) {
    this.rootPage = InicioPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
