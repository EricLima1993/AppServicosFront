import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.scss'
})
export class ClientesFormComponent implements OnInit {

  cliente!: Cliente;
  success:boolean = false;
  errors!:string[];

  constructor(private service:ClientesService, private router:Router){
    this.cliente = new Cliente();
  }

  onSubmit(){
    this.service.salvar(this.cliente).subscribe(response => {this.success = true; this.errors = []; this.cliente = response},errorResponse => {this.errors = errorResponse.error.errors; this.success = false});
  }

  ngOnInit(): void {
    
  }

  voltarParaListagem(){
    this.router.navigate(["/clientes-lista"]);
  }
}
