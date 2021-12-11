import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario-rol',
  templateUrl: './crear-usuario-rol.component.html',
  styleUrls: ['./crear-usuario-rol.component.css']
})
export class CrearUsuarioRolComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'rol': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'correo': ['',[Validators.required]],    
  });

  constructor(private fb: FormBuilder, 
    private  servicioUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarUsuario(){    
    let rol = this.fgValidador.controls["rol"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let p = new ModeloUsuario();    
    p.rol = rol;
    p.nombre = nombre;
    p.correo = correo;
    this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario)=> {
      alert("Rol del usuario creado correctamente");
      this.router.navigate(["/administracion/listar-usuario"]);
    }, (error: any) => {
      alert("Error al crear el rol del usuario");
    })
  }

}
