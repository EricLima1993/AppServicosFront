import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username!: string;
  password!: string;
  loginError!: boolean;
  cadastrando!: boolean;

  constructor( private router: Router) {

  }

  onSubmit() {
    this.router.navigate(['/home']);
  }

  prepararCadastrar(Event: Event) {
    Event.preventDefault();
    this.cadastrando = true;
  }

  cadastrar() {
    console.log(`Cadastrando usuário: ${this.username}, Senha: ${this.password}`);
  }

  cancelarCadastro() {
    this.cadastrando = false;
  }
}
