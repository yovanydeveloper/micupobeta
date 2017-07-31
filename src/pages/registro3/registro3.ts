import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { IonicPage, 
        MenuController, 
        NavController,
        Platform, 
        AlertController, 
        ToastController} from 'ionic-angular';
import {Registro2Page} from '../registro2/registro2';
import {Registro4Page} from '../registro4/registro4';


@IonicPage()
@Component({
  selector: 'page-registro3',
  templateUrl: 'registro3.html',
})
export class Registro3Page {
   
  imgPreview:string = null;
  img:string = null;
  myForm:FormGroup;

    constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public menu: MenuController,
    private camera: Camera,
    public toastCtrl: ToastController,
    public fb:FormBuilder
  ) {
     this.myForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        uni: ['', [Validators.required]],
        cargo: ['', [Validators.required]],
     });
   }
    signup() {
      this.navCtrl.push(Registro2Page);
    }
    login() {
      this.navCtrl.setRoot(Registro4Page);
    }

    camara() {

      if( !this.platform.is("cordova") ){
        this.mostrar_toast("Error: No estamos en un celular");
        return;
      }
        const options: CameraOptions = { 
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        allowEdit: true,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 100,
        targetHeight: 100,
        saveToPhotoAlbum: false,
        correctOrientation:true
                                       }
        this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              this.imgPreview = 'data:image/jpeg;base64,' + imageData;
              this.img =imageData;
              }, (err) => {
              // Handle error
              this.mostrar_toast ( "Error:" + err );
              console.error("Error en la camara: " + JSON.stringify( err ) )
            });
            
              }

    private mostrar_toast (texto:string){
        this.toastCtrl.create({
        message:texto,
        duration: 2500
        }).present();
                                         }
    submitForm(value: any):void{
      console.log('Form submited!')
      console.log(value);
    }
}
