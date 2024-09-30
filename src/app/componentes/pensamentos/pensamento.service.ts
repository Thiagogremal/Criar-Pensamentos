import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import {Observable} from 'rxjs';
import { ExcluirPensamentoComponent } from './excluir-pensamento/excluir-pensamento.component';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API= 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{

    return this.http.get<Pensamento[]>(this.API);

  }

  criar(pensamento: Pensamento): Observable<Pensamento> { 
//Este método vai retornar um Observable de <Pensamento>
    return this.http.post<Pensamento>(this.API, pensamento);
  }


  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {

    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

}