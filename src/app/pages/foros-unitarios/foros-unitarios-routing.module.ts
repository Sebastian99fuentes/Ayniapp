import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForosUnitariosPage } from './foros-unitarios.page';

const routes: Routes = [
  {
    path: '',
    component: ForosUnitariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForosUnitariosPageRoutingModule {}
