import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForosUnitariosPageRoutingModule } from './foros-unitarios-routing.module';

import { ForosUnitariosPage } from './foros-unitarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForosUnitariosPageRoutingModule
  ],
  declarations: [ForosUnitariosPage]
})
export class ForosUnitariosPageModule {}
