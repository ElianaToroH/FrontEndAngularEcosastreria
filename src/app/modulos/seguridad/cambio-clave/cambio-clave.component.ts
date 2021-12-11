import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ModeloCambiarClave } from 'src/app/modelos/cambiarClave.modelo';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {
  fgValidator : FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]]
  });

 

  constructor(private fb: FormBuilder, private servicioSeguridad : SeguridadService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  CambiarClave(){
    let usuario = this.fgValidator.controls["usuario"].value;
      
    this.servicioSeguridad.CambiarClave(usuario).subscribe((datos: ModeloCambiarClave) => {
      alert("Clave cambiada correctamente");
      this.router.navigate(["/seguridad/identificar"]);
    }, (error: any) => {
      alert("Error al cambiar clave");
    })
  }

}
