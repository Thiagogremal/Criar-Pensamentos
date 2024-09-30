import { Component, Input} from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  teste: string ='';

  @Input() pensamento: Pensamento = { //@Input recebe informações de fora do componente pai @ é um decorator
    id: 0,
    conteudo:'conteudo legal',
    autoria:"Thiago",
    modelo:'modelo3'
  }
  

  constructor() {}

  larguraPensamento(): string{

    if(this.pensamento.conteudo.length >= 256)
    {
      return 'pensamento-g'
    }
      return 'pensamento-p'

  }
}
