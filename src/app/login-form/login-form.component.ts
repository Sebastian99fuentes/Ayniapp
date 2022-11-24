import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component'; 
import { RecoverComponent } from '../recover/recover.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
register = RegisterComponent
recover = RecoverComponent
}


