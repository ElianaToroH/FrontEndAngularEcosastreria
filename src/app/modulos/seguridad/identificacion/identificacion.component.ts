import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';
import * as cryptoJs from 'crypto-js';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
fgValidator : FormGroup = this.fb.group({
  'usuario': ['', [Validators.required, Validators.email]],
  'clave': ['',[Validators.required]], 
  recaptcha: ['', Validators.required] 
});

   
   sitekey: string;
   language: string;

  constructor(private fb: FormBuilder, private servicioSeguridad : SeguridadService,
    private router : Router) { 
      this.sitekey = '6Lef0JUdAAAAAP4_ViPT3bnJ5SZU3lUAinBmHnhY';
      this.language = 'es';
    }
    
  ngOnInit(): void {
     this.fgValidator
  }

  IdentificarUsuario(){
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    let claveCifrada = cryptoJs.MD5(clave).toString();    
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any)=>{this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/inicio'])},
    (error:any)=>{alert('datos invalidos')}
    )
  }
  
}
