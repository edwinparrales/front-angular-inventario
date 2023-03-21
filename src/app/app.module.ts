import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ListaClienteComponent } from './componentes/lista-cliente/lista-cliente.component';
import { BarraNavComponent } from './componentes-ui/barra-nav/barra-nav.component';
import { BarraFooterComponent } from './componentes-ui/barra-footer/barra-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductoComponent,
    ListaClienteComponent,
    BarraNavComponent,
    BarraFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
