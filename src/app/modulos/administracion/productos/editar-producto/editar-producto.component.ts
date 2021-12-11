import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  id:string= '';
  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'talla': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
  private servicioProducto: ProductoService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  BuscarProducto(){
    this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProducto) =>{
      this.fgValidator.controls["id"].setValue(this.id);
      this.fgValidator.controls["nombre"].setValue(datos.nombre);
      this.fgValidator.controls["talla"].setValue(datos.talla);
      this.fgValidator.controls["precio"].setValue(datos.precio);
      this.fgValidator.controls["estado"].setValue(datos.estado);
      this.fgValidator.controls["descripcion"].setValue(datos.descripcion);
    });
  }

  EditarProducto () {
    let nombre = this.fgValidator.controls["nombre"].value;
    let talla = this.fgValidator.controls["talla"].value;
    let precio = parseInt(this.fgValidator.controls["precio"].value);
    let estado = this.fgValidator.controls["estado"].value;
    let descripcion = this.fgValidator.controls["descripcion"].value;
    let p = new ModeloProducto();
    p.nombre = nombre;
    p.talla = talla;
    p.precio = precio;
    p.estado = estado;
    p.descripcion = descripcion;
    p.id = this.id;
    this.servicioProducto.ActualizarProducto(p).subscribe((datos: ModeloProducto) => {
      alert("producto actualizado correctamente");
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error: any) => {
      alert("Error actualizando el producto");
    })
   
  }

/*  GuardarProducto(){
    let nombre = this.fgValidator.controls["nombre"].value;
    let talla = this.fgValidator.controls["talla"].value;
    let precio = parseInt(this.fgValidator.controls["precio"].value);
    let estado = this.fgValidator.controls["estado"].value;
    let descripcion = this.fgValidator.controls["descripcion"].value;
    let p = new ModeloProducto();
    p.nombre = nombre;
    p.talla = talla;
    p.precio = precio;
    p.estado = estado;
    p.descripcion = descripcion;
    this.servicioProducto.CrearProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto almacenado correctamente");
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error: any) => {
      alert("Error almacenado el producto");
    })
  }*/

}
