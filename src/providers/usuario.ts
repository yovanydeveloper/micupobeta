import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


import { URL_SERVICIOS }from "../config/url.servicios";
import { AlertController } from "ionic-angular";

@Injectable()
export class UsuarioService {

  constructor(public http: Http,
              private alertCtrl: AlertController){

    console.log('hello');

  }

  ingresar (correo:string, pass:string){

    let data = new URLSearchParams();
    data.append("correo", correo);
    data.append("pass", pass);

    let url = URL_SERVICIOS + "/login";

    return this.http.post( url, data )
      .map( resp=>{

        let data_resp = resp.json();

        console.log( data_resp );

        if ( data_resp.error ){

          this.alertCtrl.create({
            title: "Error al iniciar",
            subTitle: data_resp.mensaje,
            buttons: ["OK"]
          }).present();

        } else {

          //this.token = data_resp.token;
          //this.id = data_resp.id;

          //guardar en el storage

        }

        }

      )

  }

}
