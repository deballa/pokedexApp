import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulbasaur',
  templateUrl: './bulbasaur.page.html',
  styleUrls: ['./bulbasaur.page.scss'],
})
export class BulbasaurPage implements OnInit {

  pokemon = [
    {
      numero: '001',
      nome: 'Bulbasaur',
      foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      descricao: 'Bulbasaur pode ser visto cochilando sob luz solar intensa. Há uma semente em suas costas. Ao absorver os raios do sol, sua semente cresce progressivamente.',
      tipos: [ 'Grass', 'Poison' ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
