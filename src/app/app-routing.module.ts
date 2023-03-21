import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ListaClienteComponent } from './componentes/lista-cliente/lista-cliente.component';
import { ProductoComponent } from './componentes/producto/producto.component';

const routes: Routes = [
  {path:"",component:ProductoComponent},
  {path:"producto",component:ProductoComponent},
  {path:"cliente",component:ClienteComponent},
  {path:"cliente/listar",component:ListaClienteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
