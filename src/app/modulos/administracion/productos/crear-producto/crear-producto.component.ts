import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  fgValidator: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'talla': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
  private servicioProducto: ProductoService,
  private router: Router) { }

  ngOnInit(): void {
  }

  /*GuardarProducto(){
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

  GuardarProducto(){
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
  }

}
