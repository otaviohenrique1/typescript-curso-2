export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray => Array de somente leitura
    lista() {
        return this.negociacoes;
    }
}
/*
import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray => Array de somente leitura
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}

*/ 
