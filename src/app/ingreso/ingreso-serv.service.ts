import { Injectable } from '@angular/core';
import {IngresoModel}  from './ingreso-model';

@Injectable({
  providedIn: 'root'
})
export class IngresoServService {

arregloIngModel: IngresoModel[]= [];


  constructor() { }


  guardarArreglo(objeto:IngresoModel){

this.arregloIngModel.push(objeto);


  }


  eliminar(ingreso:IngresoModel){
  	let indice= this.arregloIngModel.indexOf(ingreso);
 	this.arregloIngModel.splice(indice, 1);


  }
}
