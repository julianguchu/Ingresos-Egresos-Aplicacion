import { Component, OnInit } from '@angular/core';
import {IngresoServService} from  './ingreso/ingreso-serv.service';
import {EgresoServService} from  './egreso/egreso-serv.service';
import {IngresoModel}  from './ingreso/ingreso-model';
import {EgresoModel}  from './egreso/egreso-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


arregloRecibidoSer:IngresoModel[]=[];
arregloRecibidoEgreso:EgresoModel[]=[];


  title = 'Presupuesto';


  constructor(private serv:IngresoServService, private  servE:EgresoServService){

 this.arregloRecibidoSer=this.serv.arregloIngModel;
this.arregloRecibidoEgreso=this.servE.egresoArreglo;



  }
  ngOnInit(): void {

  }

  sumarIngresos(){
  let suma=0;
this.arregloRecibidoSer.forEach(( acc)=>{ suma = acc.valor +suma;});

return suma;



  }

 
sumarEgresos(){
  let suma=0;
this.arregloRecibidoEgreso.forEach(( acc)=>{ suma = acc.valor +suma;});
return suma;

}

presupuesto(){
  
return  this.sumarIngresos() - this.sumarEgresos();

}
 
}
