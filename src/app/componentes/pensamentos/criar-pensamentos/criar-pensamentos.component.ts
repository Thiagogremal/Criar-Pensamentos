import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent{

  constructor(private service: PensamentoService,
    private router: Router
  ){}

  pensamento: Pensamento = {
    
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  criarPensamento(){

    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }

  cancelarPensamento(){

    this.router.navigate(['/listarPensamento'])
  }
}