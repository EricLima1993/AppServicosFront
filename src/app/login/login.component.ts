import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UsuarioService } from '../usuario.service';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) { }

  onSubmit() {
    this.loginError = false;
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => this.loginError = true
    });
  }

  prepararCadastrar(event: Event) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cadastrar() {
    this.usuarioService.cadastrar(this.username, this.password).subscribe({
      next: () => {
        this.cadastrando = false;
        this.loginError = false;
      },
      error: () => this.loginError = true
    });
  }

  cancelarCadastro() {
    this.cadastrando = false;
  }
}