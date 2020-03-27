
/*
  Demonstrando o padrão de "Private Class Data" através de um simples objeto "ProdutoF" exportado. Ainda na idéia de um app de e-commerce ou
  algum app de vendas no geral. Um produto deste sistema que pudesse ter seus dados expostos para uso, porém não pudesse sofrer alteração em
  seu preço através de um desconto, etc. Poderia ser protegido adicionando a chave readonly na definição de suas propriedades.
*/

export class ProdutoF {
  constructor(
      public readonly id: number = 3,
      public readonly nome: string = 'Calça Jeans',
      public readonly preco: number = 50,
      public readonly imgUrl: string = '',
      public readonly descricao: string = 'Descrição calça jeans',
      public readonly tempoPreparo: number = 0,
      public readonly tempoEntrega: number = 0,
  ) {}
}
