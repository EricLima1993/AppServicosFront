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
  clienteSelecionado!: Cliente;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(private service: ClientesService, private router:Router){

  }

  ngOnInit(): void {
    this.service.getClientes().subscribe(response => {this.clientes = response}, erroResponse => {this.mensagemErro = `Falha ao chamar o servidor! Status: ${erroResponse.error.status}`;console.log(erroResponse)});
  }

  novoCadastro(){
    this.router.navigate(["/clientes-form"]);
  }

  preparaDelecao(cliente:Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service.deletar(this.clienteSelecionado).subscribe(response =>{this.mensagemSucesso = "Cliente deletado com sucesso!";this.ngOnInit()}, erroResponse => {this.mensagemErro = "Ocorreu um erro ao deletar o cliente!"});;
  }
}
