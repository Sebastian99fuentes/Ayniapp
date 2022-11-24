import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router'; 
import { ApiUsuariosService } from '../services/api-usuarios.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private router:Router, private apiUsuarios: ApiUsuariosService,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private storage:Storage) {
      this.registerForm = this.formBuilder.group({
        userName: [''],
        userMail: [''],
        password: ['']
      })
    }

  ngOnInit() {}
  onSubmitReg() {
    if (!this.registerForm.valid) {
      return false;
    } else {
      this.apiUsuarios.registerUser(this.registerForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.registerForm.reset();
            this.storage.set("id", response.token)
            this.router.navigate(['foros'])
          })
        });
    }
  }

}
