import { Component, OnInit, Input } from '@angular/core';
import {IngresoModel}  from '../ingreso/ingreso-model';
import {IngresoServService}  from './ingreso-serv.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
@Input() arreglo: IngresoModel[];
  constructor(private ingreServ:IngresoServService) { }

  ngOnInit(): void {
  }


    eliminarIngreso(ingreso:IngresoModel){

 this.ingreServ.eliminar(ingreso);


  }
editar(){
	
	alert("elemento inicial: en construccion editar");
}
}
