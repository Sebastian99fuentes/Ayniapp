import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login = LoginFormComponent
}
