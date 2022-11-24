import { Component, OnInit, NgZone } from '@angular/core';
import { RegisterComponent } from '../register/register.component'; 
import { RecoverComponent } from '../recover/recover.component';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ApiUsuariosService } from '../services/api-usuarios.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private apiUsuarios: ApiUsuariosService,
                public formBuilder: FormBuilder,
                private zone: NgZone,) {
                  this.loginForm = this.formBuilder.group({
                    userMail: [''],
                    password: ['']
                  })
                }

  ngOnInit() {}

  onSubmit() {
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.apiUsuarios.loginUser(this.loginForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.loginForm.reset();
          })
        });
    }
  }

  register = RegisterComponent
  recover = RecoverComponent

}


