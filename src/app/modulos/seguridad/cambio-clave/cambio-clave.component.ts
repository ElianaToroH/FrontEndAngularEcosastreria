import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJs from 'crypto-js';


@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {
  fgValidador : FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, private servicioSeguridad : SeguridadService,
    private router : Router) { }

  ngOnInit(): void {
  }

  CambiarClave(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJs.MD5(clave).toString();
    this.servicioSeguridad.CambiarClave(usuario, claveCifrada).subscribe((datos:any)=>{this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/seguridad/cambioClave'])},
    (error:any)=>{alert('datos invalidos')}
    )
  }

}
