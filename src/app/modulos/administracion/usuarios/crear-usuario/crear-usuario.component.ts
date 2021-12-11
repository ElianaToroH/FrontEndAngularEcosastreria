import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'correo': ['',[Validators.required, Validators.email]],
    /*'id': ['',[Validators.required]],
    'rol': ['',[Validators.required]],*/
  });


  constructor(private fb: FormBuilder, 
    private  servicioUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarUsuario(){
    /*let id = this.fgValidador.controls["id"].value;*/
    let nombre = this.fgValidador.controls["nombre"].value;
    let correo = this.fgValidador.controls["correo"].value;
    /*let rol = this.fgValidador.controls["rol"].value;*/
    let p = new ModeloUsuario();
    p.nombre = nombre;
    p.correo = correo;
    /*p.id = id;
    p.rol = rol;*/
    this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario)=> {
      alert("Usuario creado correctamente");
      this.router.navigate(["/seguridad/identificar"]);
    }, (error: any) => {
      alert("Error al crear el usuario");
    })
  }

}
