import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoReconocerPage } from './como-reconocer.page';

const routes: Routes = [
  {
    path: '',
    component: ComoReconocerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoReconocerPageRoutingModule {}
