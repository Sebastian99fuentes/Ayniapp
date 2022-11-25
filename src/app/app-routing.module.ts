import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForosPageModule } from './pages/foros/foros.module';

const routes: Routes = [
  {
    path: '',
    redirectTo:'info',
    pathMatch:'full',
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'como-reconocer',
    loadChildren: () => import('./pages/como-reconocer/como-reconocer.module').then( m => m.ComoReconocerPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'foro-crear',
    loadChildren: () => import('./pages/foro-crear/foro-crear.module').then( m => m.ForoCrearPageModule)
  },
  {
    path: 'foros',
    loadChildren: () => import('./pages/foros/foros.module').then( m => m.ForosPageModule)
  },
  {
    path: 'foros/:id',
    loadChildren: () => import('./pages/foros-unitarios/foros-unitarios.module').then( m => m.ForosUnitariosPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.component').then( m => m.RegisterComponent)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
