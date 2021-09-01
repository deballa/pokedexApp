import { IPokemon } from './../models/IPokemon.model';
import { PokemonService } from './../services/pokemon.service';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Criamos um array de pokemons
  // [] => representa um array (lista)
  // {} => representa um objetivo (item)

  /* listaPokemons = [
    {
      numero: '001',
      nome: 'Bulbasaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      tipos: [ 'Grass', 'Poison' ]
    },
    {
      numero: '002',
      nome: 'Ivysaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
      tipos: [ 'Grass', 'Poison' ]
    },
    {
      numero: '003',
      nome: 'Venusaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
      tipos: [ 'Grass', 'Poison' ]
    },
    {
      numero: '004',
      nome: 'Charmander',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      tipos: [ 'Fire' ]
    },
    {
      numero: '005',
      nome: 'Charmeleon',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
      tipos: [ 'Fire' ]
    },
    {
      numero: '006',
      nome: 'Charizard',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      tipos: [ 'Fire', 'Flying' ]
    },
    {
      numero: '007',
      nome: 'Squirtle',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      tipos: [ 'Water' ]
    },
    {
      numero: '008',
      nome: 'Wartortle',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
      tipos: [ 'Water' ]
    },
    {
      numero: '009',
      nome: 'Blastoise',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
      tipos: [ 'Water' ]
    },
    {
      numero: '010',
      nome: 'Caterpie',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
      tipos: [ 'Bug' ]
    }
  ]; */

  listaPokemons: IPokemon[] = [];

  listaPokemonsFiltrada: IPokemon[] = [];

  totalPokemons = 0; // Guarda o total de pokemons

  offset = 0; // Utilizado para navegar entre as páginas

  constructor(
    private dadosService: DadosService,
    private router: Router,
    private pokemonService: PokemonService) {
      this.buscarPokemonAPI();
  }

  retornaPokemon(): void {
    //Ordena os pokemons por id
    this.listaPokemons.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }

      if (a.id < b.id) {
        return -1;
      }

      return 0;
    });

    this.listaPokemonsFiltrada = this.listaPokemons;
  }

  buscarPokemon(evento): void {
    this.retornaPokemon(); //Coloca todos os pokemons na lista filtrada
    const busca: string = evento.target.value; // Pega o valor digitado no campo de busca

    if(busca && busca.trim() !== ''){ // Testa se tem alguma coisa no campo
      this.listaPokemonsFiltrada = this.listaPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(busca.trim().toLowerCase())
      );
    }
  }

  abrirPokemon(pokemon: any): void {
    //Salva o pokemon clicando no serviço de dados temporário
    this.dadosService.setDados('pokemon', pokemon);

    //Navega até a página para exibir os dados
    this.router.navigateByUrl('/dados-pokemon');
    //this.router.navigateByUrl('/bulbasaur');
  }

  buscarPokemonAPI(offset = 0): void {
    this.offset = offset;
    this.listaPokemons = [];
    this.pokemonService.buscarPokemons(this.offset).subscribe(dadosRetorno => {
      console.log(dadosRetorno); //Pega a lista de pokemons da API.

      this.totalPokemons = dadosRetorno.count; // Pega o total de pokemons da API

      //Percorre a lista de Pokemons para buscar os dados de cada pokemon.
      for (const item of dadosRetorno.results) {
        //Busca na API os dados de cada pokemon.
        this.pokemonService.buscarUmPokemon(item.url).subscribe(dadosPokemon => {
          this.listaPokemons.push(dadosPokemon); //Coloca os dados no Array
          this.retornaPokemon();
        });
      }
    }); //Fim do Sobcribe
  } //Fim do Método
}
