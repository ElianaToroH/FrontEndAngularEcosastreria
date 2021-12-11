import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})

export class EditarUsuarioComponent implements OnInit {
  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'id': ['',[Validators.required]],
    'rol': ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, 
    private  servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario(){
    this.servicioUsuario.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloUsuario) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["rol"].setValue(datos.rol);
    });
  }

  EditarUsuario(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let id = (this.fgValidador.controls["id"].value);
    let correo = this.fgValidador.controls["correo"].value;
    let rol = this.fgValidador.controls["rol"].value;
    let p = new ModeloUsuario();
    p.nombre = nombre;
    p.correo = correo;
    p.rol = rol;
    p.id = this.id;
    this.servicioUsuario.ActualizarUsuario(p).subscribe((datos: ModeloUsuario)=> {
      alert("Usuario actualizado correctamente");
      this.router.navigate(["/administracion/listar-usuario"]);
    }, (error: any) => {
      alert("Error actualizando el Usuario");
    })
  }

}
