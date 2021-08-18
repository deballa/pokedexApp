import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulbasaurPageRoutingModule } from './bulbasaur-routing.module';

import { BulbasaurPage } from './bulbasaur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulbasaurPageRoutingModule
  ],
  declarations: [BulbasaurPage]
})
export class BulbasaurPageModule {}
