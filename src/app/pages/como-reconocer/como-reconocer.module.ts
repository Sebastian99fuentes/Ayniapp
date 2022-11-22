import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoReconocerPageRoutingModule } from './como-reconocer-routing.module';

import { ComoReconocerPage } from './como-reconocer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoReconocerPageRoutingModule
  ],
  declarations: [ComoReconocerPage]
})
export class ComoReconocerPageModule {}
