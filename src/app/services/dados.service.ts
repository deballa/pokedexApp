import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  //Array que irá armazenar os dados em memória
  //Servirá como um BD temporário para nossa aplicação
  private dados = [];

  constructor() { }

  setDados(chave: string, dado: any): boolean{
    if(chave && chave.trim() !== ''){
      this.dados[chave.trim()] = dado;
      return true;
    }
    return false;
  }

  getDados(chave: string): any{
    if(chave && chave.trim() !== ''){
      return this.dados[chave.trim()];
    }
  }

  deleteDados(chave: string): boolean{
    if(chave && chave.trim() !== ''){
      delete this.dados[chave.trim()];
      return true;
    }

    return false;
  }

}
