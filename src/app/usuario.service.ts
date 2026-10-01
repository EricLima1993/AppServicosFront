import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL: string = environment.apiURLBase + "/api/usuarios";

  constructor(private http: HttpClient) { }

  cadastrar(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiURL}`, { username, password });
  }
}