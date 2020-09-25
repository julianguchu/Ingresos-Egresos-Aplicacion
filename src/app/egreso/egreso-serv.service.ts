import { Injectable } from '@angular/core';
import {EgresoModel}  from './egreso-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EgresoServService {
egresoArreglo:EgresoModel[]=[];

  constructor() { }


  guardarArreglo(objetoEgreso:EgresoModel){


  this.egresoArreglo.push(objetoEgreso);
 

 
  }
  eliminar(egreso:EgresoModel){
  	let indice= this.egresoArreglo.indexOf(egreso);
 	this.egresoArreglo.splice(indice, 1);


  }


}
