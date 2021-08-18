import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulbasaurPage } from './bulbasaur.page';

const routes: Routes = [
  {
    path: '',
    component: BulbasaurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulbasaurPageRoutingModule {}
