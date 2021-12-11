import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJs from 'crypto-js';
import { ModeloCambiarClave } from 'src/app/modelos/cambiarClave.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {
  fgValidator : FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['',[Validators.required]]
  });

 

  constructor(private fb: FormBuilder, private servicioSeguridad : SeguridadService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  CambiarClave(){
    let usuario = this.fgValidator.controls["ususario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    let claveCifrada = cryptoJs.MD5(clave).toString();
      
    this.servicioSeguridad.CambiarClave(usuario, claveCifrada).subscribe((datos: ModeloCambiarClave) => {
      alert("Clave cambiada correctamente");
      this.router.navigate(["/seguridad/identificar"]);
    }, (error: any) => {
      alert("Error al cambiar clave");
    })
  }

}
