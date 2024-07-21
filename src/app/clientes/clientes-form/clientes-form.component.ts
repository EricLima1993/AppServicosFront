import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.scss'
})
export class ClientesFormComponent implements OnInit {

  cliente!: Cliente;

  constructor(private service:ClientesService){
    this.cliente = new Cliente();
  }

  onSubmit(){
    this.service.salvar(this.cliente).subscribe(response => {console.log(response)});
  }

  ngOnInit(): void {
    
  }
}
