import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes-form/cliente';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.scss'
})
export class ClientesListaComponent implements OnInit{

  clientes:Cliente[] = [];

  constructor(private service: ClientesService, private router:Router){

  }

  ngOnInit(): void {
    this.service.getClientes().subscribe(response => this.clientes = response);
  }

  novoCadastro(){
    this.router.navigate(["/clientes-form"]);
  }
}
