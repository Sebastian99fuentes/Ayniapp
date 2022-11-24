import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent implements OnInit {
  loginForm: FormGroup;
  constructor( public formBuilder: FormBuilder) { this.loginForm = this.formBuilder.group({
    userMail: ['']
  })}

  ngOnInit() {}
  myRecover() {
    if (!this.loginForm.valid) {
      return false;
    } else {
    alert("El mensaje de recuperación ha sido enviado a su correo")
    }
  }
}
