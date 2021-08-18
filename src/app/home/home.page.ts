import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Criamos um array de pokemons
  // [] => representa um array (lista)
  // {} => representa um objetivo (item)

  listaPokemons = [
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
  ];

  listaPokemonsFiltrada = [];

  constructor() {
    this.retornaPokemon();
  }

  retornaPokemon(): void {
    this.listaPokemonsFiltrada = this.listaPokemons;
  }

  buscarPokemon(evento): void {
    this.retornaPokemon(); //Coloca todos os pokemons na lista filtrada
    const busca: string = evento.target.value; // Pega o valor digitado no campo de busca

    if(busca && busca.trim() !== ''){ // Testa se tem alguma coisa no campo
      this.listaPokemonsFiltrada = this.listaPokemons.filter(pokemon =>
        pokemon.nome.toLowerCase().includes(busca.trim().toLowerCase())
      );
    }
  }

}
