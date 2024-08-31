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
    this.clienteSevice.getClientes().subscribe(response => {this.clientes = response;}, erroResponse => {this.errors = [`Falha ao buscar o a lista de clientes, erro no servidor! Status: ${erroResponse.error.status}`];console.log(erroResponse)});
  }

  onSubmit(){
    this.service.salvar(this.servico).subscribe(response => { 
      this.servico = response; 
      this.success = true; 
      this.errors = []; 
      this.servico = new ServicoPrestado();
    }, errorResponse =>{ 
      if(errorResponse.error.errors){
        this.errors = errorResponse.error.errors;
      }else{
        this.errors =  [`Falha ao chamar o servidor! Status: ${errorResponse.error.status}`]; 
      }
      this.success = false; 
    });
  }

  voltarParaListagem(){
    this.router.navigate(["/servico-prestado-lista"]);
  }

}
