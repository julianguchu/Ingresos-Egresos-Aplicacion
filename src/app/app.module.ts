import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import {EgresoServService} from  './egreso/egreso-serv.service';
import {IngresoServService} from  './ingreso/ingreso-serv.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IngresoComponent,
    EgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EgresoServService,IngresoServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
