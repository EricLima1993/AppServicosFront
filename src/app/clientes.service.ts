import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes-form/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase+"/api/clientes"

  constructor(private http: HttpClient) { }

  salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post(`${this.apiURL}/criar`, cliente);
  }

  atualizar(cliente:Cliente):Observable<any>{
    return this.http.put(`${this.apiURL}/atualizar/${cliente.id}`, cliente);
  }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiURL}/buscar`);
  }

  getClienteById(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiURL}/buscar/${id}`);
  }

  deletar(cliente:Cliente):Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/deletar/${cliente.id}`);
  }
}
