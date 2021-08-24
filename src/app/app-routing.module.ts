import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bulbasaur',
    loadChildren: () => import('./pokemons/bulbasaur/bulbasaur.module').then( m => m.BulbasaurPageModule)
  },
  {
    path: 'dados-pokemon',
    loadChildren: () => import('./pokemons/dados-pokemon/dados-pokemon.module').then( m => m.DadosPokemonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
