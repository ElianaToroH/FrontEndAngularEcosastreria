import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path: 'identificar',
    component: IdentificacionComponent
  },
  {
    path: 'cambiarClave',
    component: CambioClaveComponent
  } ,
  {
    path: "cerrarSesion",
    component: CerrarSesionComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
