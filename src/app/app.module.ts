import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';


//plugins
//import { Geolocation } from '@ionic-native/geolocation';

// import services
import {DriverService} from '../services/driver-service';
import {NotificationService} from '../services/notification-service';
import {PlaceService} from '../services/place-service';
import { Data } from '../providers/data/data';
// end import services
// import pages
import { ResetpssPage } from '../pages/resetpss/resetpss';
import { DriverPage} from '../pages/driver/driver';
import { FindingPage} from '../pages/finding/finding';
import { RegistroViajePage} from '../pages/registrov/registrov';
import { HomePage} from '../pages/home/home';
import { InicioPage} from '../pages/inicio/inicio';
import { Registro4Page} from '../pages/registro4/registro4';
import { Registro3Page} from '../pages/registro3/registro3';
import { Registro2Page} from '../pages/registro2/registro2';
import { LoginPage} from '../pages/login/login';
import { TutoPage} from '../pages/tuto/tuto';
import { NotificationPage} from '../pages/notification/notification';
import { PlacesPage} from '../pages/places/places';
import { Registro1Page} from '../pages/registro1/registro1';
import { SupportPage} from '../pages/support/support';
import { TrackingPage} from '../pages/tracking/tracking';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    ResetpssPage,
    DriverPage,
    FindingPage,
    RegistroViajePage,
    HomePage,
    InicioPage,
    LoginPage,
    NotificationPage,
    PlacesPage,
    Registro1Page,
    Registro4Page,
    Registro2Page,
    Registro3Page,
    TutoPage,
    TrackingPage,
    SupportPage
],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ResetpssPage,
    DriverPage,
    FindingPage,
    RegistroViajePage,
    HomePage,
    InicioPage,
    LoginPage,
    NotificationPage,
    PlacesPage,
    Registro1Page,
    Registro4Page,
    Registro3Page,
    Registro2Page,
    TutoPage,
    TrackingPage,
    SupportPage
],
  providers: [
    DriverService,
    NotificationService,
    PlaceService,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    /* import services */
]
})
export class AppModule {}
