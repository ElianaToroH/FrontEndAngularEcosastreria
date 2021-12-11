import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  SeInicioSesionCliente: boolean = false;
  SeInicioSesionAdmint: boolean = false;
  SeInicioSesionTrabajador: boolean = false;
  subs: Subscription = new Subscription();
  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs= this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos : ModeloIdentificar)=>{
      if(datos.datos?.rol==='6196d4c5f87ca32fac994dfa'){
        this.SeInicioSesionCliente=datos.estaIdentificado;
      }else if(datos.datos?.rol==='619889758db3da310c6db1c2'){
        this.SeInicioSesionAdmint=datos.estaIdentificado;
      }else if(datos.datos?.rol==='61988a4be16c2037c8dc3340'){
        this.SeInicioSesionTrabajador=datos.estaIdentificado;
      } else {
        this.SeInicioSesionCliente=datos.estaIdentificado;
        this.SeInicioSesionAdmint=datos.estaIdentificado;
        this.SeInicioSesionTrabajador=datos.estaIdentificado;
      }
    })
  }   
 

}
