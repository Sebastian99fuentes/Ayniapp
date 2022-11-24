import { Component, OnInit, NgZone } from '@angular/core';
import { RegisterComponent } from '../register/register.component'; 
import { RecoverComponent } from '../recover/recover.component';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ApiUsuariosService } from '../services/api-usuarios.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router:Router, private apiUsuarios: ApiUsuariosService,
                public formBuilder: FormBuilder,
                private zone: NgZone,
                private storage:Storage) {
                  this.loginForm = this.formBuilder.group({
                    userMail: [''],
                    password: ['']
                  })
                }

  ngOnInit() {this.storage.create();}


  onSubmit() {
    if (!this.loginForm.valid) {
      return false;
    } else {
      this.apiUsuarios.loginUser(this.loginForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.loginForm.reset();
            this.storage.set("id", response.token)
            this.router.navigate(['foros'])
            // this.databaseService.addID(response.token)
          })
        });
    }
  }

  register = RegisterComponent
  recover = RecoverComponent

}


