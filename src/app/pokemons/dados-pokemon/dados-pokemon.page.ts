import { Router } from '@angular/router';
import { DadosService } from './../../services/dados.service';
import { Component, OnInit } from '@angular/core';

export interface IPokemon {
  numero: string;
  nome: string;
  foto: string;
  tipos: string[];
}

@Component({
  selector: 'app-dados-pokemon',
  templateUrl: './dados-pokemon.page.html',
  styleUrls: ['./dados-pokemon.page.scss'],
})
export class DadosPokemonPage implements OnInit {

  pokemon: IPokemon;

  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit() {
    this.pokemon = this.dadosService.getDados('pokemon');
    console.log('Dados do Pokemon: ', this.pokemon);

    //Se não tiver um pokemon armazenado no serviço de dados
    //Ele volta para a página home.
    if(!this.pokemon) {
      this.router.navigateByUrl('/home');
    }
  }

}
