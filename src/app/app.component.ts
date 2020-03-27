import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';

// Importamos o protótipo do produto aqui.
import { Produto } from './models/produto.model';

// Importamos o objeto final aqui.
import { ProdutoF } from './models/produto-imutavel.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // Utilizamos o objeto produto em um array de produtos para usar em nosso sistema.
  produtos: Produto[] = [
    new Produto(1, 'Camiseta M', 19.90, '', 'Descrição camiseta M', 0, 0),
    new Produto(2, 'Camiseta G', 22.90, '', 'Descrição camiseta G', 0, 0),
  ];

  // Utilizamos o objeto final em uma variável para usar em nosso sistema.
  calcaJeans: ProdutoF = new ProdutoF();

  // Para demonstrar o "Observer" utilizamos um Observer que fica escutando por mudanças para atualizações instantaneas.
  precoSub: Subscription;

  // E utilizamos um emissor de valores.
  precoEvent: EventEmitter<any> = new EventEmitter();

  // Este é o objeto que irá mostrar mudanças em preços temporariamente quando ocorrerem.
  produtoAtualizado: Produto;


  /*
  Ao iniciar nossa página, o observer será registrado e escutará os eventos de nosso emissor, atualizando o preço
  do produto em questão. Isto é útil para
 */
  ngOnInit() {
    this.precoSub = this.precoEvent.subscribe(p => {
      this.produtoAtualizado = p;
    });

    setTimeout(() => {
      this.produtos[1].preco = 17.90;
      this.precoEvent.emit(this.produtos[1]);
    }, 3000);
  }

  ngOnDestroy() {

  }
}
