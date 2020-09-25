import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {EgresoServService} from  '../egreso/egreso-serv.service';
import {IngresoServService} from  '../ingreso/ingreso-serv.service';
import {IngresoModel}  from '../ingreso/ingreso-model';
import {EgresoModel}  from '../egreso/egreso-model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
descripcion:string;
valor:number;
seleccionado:string="+";
sumEgresos:any;

  constructor(private sIngreso:IngresoServService, private sEgreso:EgresoServService) {



   }


  ngOnInit(): void {


  }


  onEnviaFormulario(){

  if (this.seleccionado == "+"){
let objetoIngreso= new IngresoModel();
objetoIngreso.descripcion= this.descripcion;
objetoIngreso.valor=this.valor;
this.sIngreso.guardarArreglo(objetoIngreso);
this.descripcion=null;
this.valor=null;
this.seleccionado="+";


  }
  else if(this.seleccionado=="-") {



let objetoEgreso= new EgresoModel();
objetoEgreso.descripcion= this.descripcion;
objetoEgreso.valor=this.valor; 
this.sEgreso.guardarArreglo(objetoEgreso);
this.descripcion=null;
this.valor=null;
this.seleccionado="+";


  }


  }

}
