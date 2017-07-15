import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class Data {
 
    items: any;
 
    constructor(public http: Http) {
 
        this.items = [
            {title: 'La Badea - Dosquebradas'},
            {title: 'Bosques de la Acuarela - Dosquebradas'},
            {title: 'La mariana -Dosquebradas'},
            {title: 'alfonso Lopez - Pereira'},
            {title: 'Avenida Circunvalar - Arboleda - Pereira'},
            {title: 'Campestre A - Dosquebradas'},
            {title: 'Campestre B - Dosquebradas'},
            {title: 'Campestre C - Dosquebradas'},
            {title: 'Santa monica - Dosquebradas'},
            {title: 'La pradera Dosquebradas'},
            {title: 'Milan - Dosquebradas'},
            {title: 'Avenida 30 de agosto'},
            {title: 'La romelia - Dosquebradas'},
            {title: 'Samaria - cuba- Pereira'},
            {title: 'villa verde - cuba - pereira'},
            {title: 'El poblado - cuba -pereira'},
            {title: 'buenos aires - dosquebradas - '},
            {title: '2500 lotes cuba -Pereira '},
            {title: 'pinares - Pereira'},
            {title: 'Palacio de justicia - calle 30- Pereira'},
            {title: 'Villa del campo - Dosquebradas'},
            {title: 'Santa Teresita - Dosquebradas'},
            {title: 'Santa Isabel -SENA-  Dosquebradas'},
            {title: 'Parque lago de Pereira'},
            {title: 'Parque Simon bolivar - Pereira'},
            {title: 'Parque Banderas - Pereira'},
            {title: 'Los cambulos - Dosquebradas'},
            {title: 'Los molinos- Dosquebradas'},
            {title: 'El progreso - Dosquebradas'},
            {title: 'Tejares de la loma - Dosquebradas'},
            {title: 'Barrio Galaxia - Dosquebradas'},
            {title: 'Barrio Montelibano- cuba -pereira'},
            {title: 'Gama 2 - Cuba- Pereira '},
            {title: 'Corales -Pereira '},
            {title: 'Villa Olimpica -Belmonte - Pereira'},
            {title: 'Santa Rosa'},
            {title: 'Manizales - caldas'},
            {title: 'El Jardin - Avenida Sur -Pereira'},
            {title: 'Barrio San Fernando - Cuba-Pereira'},
            {title: 'San luis - Pereira'},
            {title: 'Gama 3 - Pereira'},
            {title: 'Boston- Pereira'},
            {title: 'San Joaquin -Cuba - Pereira'},
            {title: 'Guayacanes - Cuba - Pereira'},
            {title: 'Manizales - caldas'},
            {title: 'El Jardin - Avenida Sur -Pereira'},
            {title: 'Barrio San Fernando - Cuba-Pereira'},
            {title: 'San luis - Pereira'},
            {title: 'Gama 3 - Pereira'},
            {title: 'Boston- Pereira'},
        ]
        
 
    }
 
    filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }
 
}