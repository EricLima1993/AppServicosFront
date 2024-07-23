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

  atualizar(cliente:Cliente):Observable<any>{
    return this.http.put(`http://localhost:8080/api/clientes/atualizar/${cliente.id}`, cliente);
  }

  getClientes():Observable<Cliente[]>{

    return this.http.get<Cliente[]>("http://localhost:8080/api/clientes/buscar");
  }

  getClienteById(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8080/api/clientes/buscar/${id}`);
  }

  deletar(cliente:Cliente):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/clientes/deletar/${cliente.id}`);
  }
}
