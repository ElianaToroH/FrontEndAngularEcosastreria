import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioRolComponent } from './usuarios/crear-usuario-rol/crear-usuario-rol.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';

const routes: Routes = [
  
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'crear-usuario-rol',
    component: CrearUsuarioRolComponent
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'listar-usuario',
    component: BuscarUsuarioComponent
  },
  {
    path: "listar-productos",
    component: BuscarProductoComponent
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
