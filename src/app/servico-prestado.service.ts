import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase+"/api/servico-prestados";

  constructor(private http: HttpClient) { }

  salvar(servico:ServicoPrestado):Observable<ServicoPrestado>{
    return this.http.post(this.apiURL+"/criar", servico);
  }
}
