import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent{


    listaPensamentos: Pensamento[] = [];
    constructor(private service: PensamentoService){}

    ngOnInit(): void{// Toda logica que voce quiser que seja carregada,tem de ser executada no NgOnInit

      this.service.listar().subscribe((listaPensamentos) => {this.listaPensamentos = listaPensamentos});
      //listaPensamentos é a lista que vai ser obtida do Observable
    }
}
