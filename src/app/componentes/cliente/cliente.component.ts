import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  listaCliente:string[];
  nombre:string;

     constructor(){
      this.listaCliente=["Edwin Parrales"];
      this.nombre=""
     }
  agregarCliente(){

     this.listaCliente.push(this.nombre);
  }
  eliminarCliente(codigo:any){
    const filteredLibraries = this.listaCliente.filter((item) => item !== codigo);

    this.listaCliente=filteredLibraries;
  }
}
