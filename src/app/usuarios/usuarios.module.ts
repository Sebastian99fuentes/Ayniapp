import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosPageRoutingModule } from './usuarios-routing.module';

import { UsuariosPage } from './usuarios.page';
import { LoginFormComponent } from '../login-form/login-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { RecoverComponent } from '../recover/recover.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot({},),
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UsuariosPageRoutingModule
  ],
  declarations: [UsuariosPage, LoginFormComponent, RegisterComponent, RecoverComponent]
})
export class UsuariosPageModule {

}
