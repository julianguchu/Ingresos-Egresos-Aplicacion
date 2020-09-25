import { Component, OnInit, Input  } from '@angular/core';
import {EgresoModel}  from './egreso-model';
import {EgresoServService}  from './egreso-serv.service';
@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
@Input() sumEgreso :number;

 arregloEgreso: EgresoModel[]=[];
  constructor(private  egreServ:EgresoServService) {      this.arregloEgreso= this.egreServ.egresoArreglo;}

  ngOnInit(): void {
  }

  eliminarEgreso(egreso:EgresoModel){

 this.egreServ.eliminar(egreso);


  }
  editar(){
	
	alert("elemento inicial: en construccion editar");
}

}
