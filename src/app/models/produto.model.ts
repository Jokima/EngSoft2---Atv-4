
/*
  Demonstrando o padrão de protótipo através de um simples objeto "Produto" exportado. Digamos que este seja um app de e-commerce ou
  algum app de vendas no geral. Um produto deste sistema seria um objeto com algumas informações pre-definidas. Ao criar e exportar um
  objeto com propriedades definidas, este objeto está pronto para ser copiado para outras partes do sistema, facilitando
  seu reuso.
*/

export class Produto {
  constructor(
      public id: number,
      public nome: string,
      public preco: number,
      public imgUrl: string,
      public descricao: string,
      public tempoPreparo: number,
      public tempoEntrega: number,
  ) {}
}
