import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Component } from '@angular/core';
import { IonicPage, 
  MenuController,
  NavParams,
   NavController,
   Platform, 
   AlertController,
   ToastController
  } from 'ionic-angular';
import { LoginPage} from '../login/login';
import {Registro3Page} from '../registro3/registro3';

@IonicPage()
@Component({
  selector: 'page-registro4',
  templateUrl: 'registro4.html'
})
export class Registro4Page {
    myForm:FormGroup;
    img:string = null;
    imgPreview:string = null;

    constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl:ToastController,
    private imagePicker: ImagePicker,
    public fb:FormBuilder
  ) {
     this.myForm = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
     });
   }
    signup() {
      this.navCtrl.push(Registro3Page);
    }
    login() {
      let prompt = this.alertCtrl.create({
        title: 'Genial!',
        subTitle: 'Registro realizado con éxito, en breve verificaremos los datos de tu cuenta',
        buttons: [
          {
            text: 'Aceptar',
            handler: data => {
              console.log('Saved clicked');
              this.navCtrl.setRoot(LoginPage);
            }
          }
        ]
      })
      prompt.present();
    }

       seleccionar_fotos(){

            if( !this.platform.is("cordova") ){
            this.mostrar_toast("Error: No estamos en un celular");
            return;
                                               }

            let opciones: ImagePickerOptions ={
                maximumImagesCount: 1,
                quality: 40,
                outputType: 1,
            }

            this.imagePicker.getPictures(opciones).then((results) => {
              
              for ( let img of results ){
                this.imgPreview = 'data:image/jpeg;base64,' + img
                this.img = img;
                break;
              } 
       
            }, (err) => { 
            this.mostrar_toast("Error de seleccion:"+ err)
            console.error("Error en seleccion: " + JSON.stringify( err ) )
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


/* funcion camara aun no operativa
    camara() {

      if( !this.platform.is("cordova") ){
        this.mostrar_toast("Error: No estamos en un celular");
        return;
      }
        const options: CameraOptions = { 
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation:true
                                       }
        this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              this.imgPreview = 'data:image/jpeg;base64,' + imageData;
              }, (err) => {
              // Handle error
              this.mostrar_toast ( "Error:" + err );
              console.error("Error en la camara: ", + err);
            });
            
              }

    private mostrar_toast (texto:string){
        this.toastCtrl.create({
        message:texto,
        duration: 2500
        }).present();
                                         }

*/
/* deplegable de opciones : camara y galeria
    foto() {
      let prompt = this.alertCtrl.create({
        title: 'Selecciona Una Opcion',
        buttons: [
          {
            text: 'Galeria',
            handler: data => {
              console.log('Opcion guardada');
              this.navCtrl.setRoot(Registro4Page);
            }
          },
           {
            text: 'Cámara',
            handler: data => {
              console.log('opcion guardada');
              this.navCtrl.setRoot(Registro4Page);
            } 
          },
          {
            text: 'Cancelar',
            handler: data => {
              console.log('opcion guardada');
              this.navCtrl.pop();
            } 
          },
        ]
      })

      prompt.present();
    }
*/
