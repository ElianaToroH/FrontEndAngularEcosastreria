import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioClaveComponent,    
    CerrarSesionComponent 
  ],
  
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ]
})
export class SeguridadModule { }