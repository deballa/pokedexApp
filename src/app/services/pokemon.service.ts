import { IPokemon } from '../models/IPokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IItemPokemon {
  name: string;
  url: string;
}
export interface IListaPokemon {
  count: number;
  next: string;
  previous: string;
  results: IItemPokemon[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(public http: HttpClient) { }

  buscarPokemons(offset = 0, limit = 10): Observable<IListaPokemon> {
    const urlConsulta = `${this.url}?limit=${limit}&offset=${offset}`;
    //ou: const urlNormal = this.url + '?limit=' + limit + '&offset=' + offset;

    return this.http.get<IListaPokemon>(urlConsulta);
  }

  buscarUmPokemon(url: string): Observable<IPokemon>{
    return this.http.get<IPokemon>(url);
  }
}
