import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { ServicoPrestadoLista } from './servico-prestado/servico-prestado-lista/servicoPrestadoLista';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase+"/api/servico-prestados";

  constructor(private http: HttpClient) { }

  salvar(servico:ServicoPrestado):Observable<ServicoPrestado>{
    return this.http.post(this.apiURL+"/criar", servico);
  }

  buscar(nome:string, mes:number):Observable<ServicoPrestadoLista[]>{
    const httpParams = new HttpParams().set("nome", nome ? nome : "").set("mes", mes ? mes.toString() : "");

    return this.http.get<any>(`${this.apiURL}/buscar/?${httpParams.toString()}`);
  }
}
