import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/clientes-form/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.scss'
})
export class ServicoPrestadoFormComponent implements OnInit{

  clientes: Cliente[] = [];
  servico:ServicoPrestado;
  success:boolean = false;
  errors!:string[];

  constructor(private clienteSevice: ClientesService, private service: ServicoPrestadoService, private router:Router){
    this.servico = new ServicoPrestado();
  }
  ngOnInit(): void {
    this.clienteSevice.getClientes().subscribe(response => {this.clientes = response;});
  }

  onSubmit(){
    this.service.salvar(this.servico).subscribe(response => { 
      this.servico = response; 
      this.success = true; 
      this.errors = []; 
      this.servico = new ServicoPrestado();
    }, errorResponse =>{ 
      this.errors = errorResponse.error.errors; 
      this.success = false
    });
  }

  voltarParaListagem(){
    this.router.navigate(["/servico-prestado-lista"]);
  }

}
