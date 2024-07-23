import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from '../../clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.scss'
})
export class ClientesFormComponent implements OnInit {

  cliente!: Cliente;
  success:boolean = false;
  errors!:string[];
  id!: number;

  constructor(private service:ClientesService, private router:Router, private activatedRoute:ActivatedRoute){
    this.cliente = new Cliente();
  }

  onSubmit(){
    if(this.id){
      this.service.atualizar(this.cliente).subscribe(response => {this.success = true; this.errors = [];}, errorResponse => {this.errors = errorResponse.error.errors; this.success = false});
    }else{
      this.service.salvar(this.cliente).subscribe(response => {this.success = true; this.errors = []; this.cliente = response}, errorResponse => {this.errors = errorResponse.error.errors; this.success = false});
    }
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service.getClienteById(this.id).subscribe(response => {this.cliente = response}, errorResponse =>{});
      }
    });
  }

  voltarParaListagem(){
    this.router.navigate(["/clientes-lista"]);
  }
}
