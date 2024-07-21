import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes-form/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post("http://localhost:8080/api/clientes/criar", cliente);
  }
  getCliente():Cliente{
    let cliente:Cliente = new Cliente();
    cliente.nome = "Fulano";
    cliente.cpf = "1234567890";

    return cliente;
  }
}
