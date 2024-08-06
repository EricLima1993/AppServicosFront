import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoLista } from './servicoPrestadoLista';
import { ServicoPrestadoService } from '../../servico-prestado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrl: './servico-prestado-lista.component.scss'
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome!:string;
  mes!: number;
  meses: number[];
  lista!: ServicoPrestadoLista[];
  mesagem!: string;
  tabelaConteudo: boolean = false;

  constructor(private service: ServicoPrestadoService, private router:Router){
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
    
  }

  consultar(){
    this.service.buscar(this.nome, this.mes).subscribe(response => {
      if(response.length === 0){
        this.mesagem = "Nenhum serviço encontrado!"; 
        this.tabelaConteudo = false;
      }else{
        this.mesagem = ""; 
        this.tabelaConteudo = true;
        this.lista = response
      } 
    });
  }

  novoServico(){
    this.router.navigate(["/servico-prestado-form"]);
  }
}
