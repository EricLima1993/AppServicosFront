import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/clientes-form/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.scss'
})
export class ServicoPrestadoFormComponent implements OnInit{

  clientes: Cliente[] = [];
  servico:ServicoPrestado;

  constructor(private clienteSevice: ClientesService, private service: ServicoPrestadoService){
    this.servico = new ServicoPrestado();
  }
  ngOnInit(): void {
    this.clienteSevice.getClientes().subscribe(response => {this.clientes = response;});
  }

  onSubmit(){
    this.service.salvar(this.servico).subscribe(response => { this.servico = response});
  }

}
