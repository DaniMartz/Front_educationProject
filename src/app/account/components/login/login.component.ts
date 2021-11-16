import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DxValidationGroupComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

// import { user, LoginDTO } from "../../../_models/log-in";
import { ServicioGeneralService } from "../../../_services/servicio-general.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input () rol: string;
  register: boolean = false;

  @ViewChild('targetGroup', { static: false }) validationGroup: DxValidationGroupComponent;
  loginForm: FormGroup;
  passwordMode: string;
  passwordButton: any;

  gLogin;
  loginSB:Subscription;

  constructor(private _service:ServicioGeneralService,
    private router: Router, 
    private formBuilder: FormBuilder) { 

    this.buildForm();

    this.passwordMode = 'password';
    this.passwordButton = {
      text: 'MOSTRAR',
      type: 'success',
      stylingMode: 'text',
      hoverStateEnabled: false,
      focusStateEnabled: false,
      activeStateEnabled: false,
      onClick: (e) => {
        this.passwordMode = this.passwordMode === 'text' ? 'password' : 'text';
        if (e.component.option('text') === 'MOSTRAR') {
          e.component.option('text', 'OCULTAR');
        } else {
          e.component.option('text', 'MOSTRAR');
        }
      }
    };
  }

  ngOnInit(): void {
  }

  async ngOnDestroy(){
    this.loginSB.unsubscribe();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login(evento: Event){
    evento.preventDefault();
    const valid = this.validationGroup.instance.validate();

    if(valid.isValid){
      this.gLogin = {
        user:{
          email: this.loginForm.value.email, 
          password: this.loginForm.value.password
        }
      }
      console.log("gLogin ", this.gLogin);
      
      this.loginSB = this._service.login(this.gLogin).subscribe(data => {
        console.log("respuesta del login ", data);
        localStorage.setItem ('token', data.access_token);
        this.rol = data.account
        this.goTo();
      });

    }else{
      notify('Por favor, ingrese todos los campos', 'error');
    }
  }

  // registro(){
  //   this.register = !this.register;
  // }

  goTo(){
    if(this.rol === "Student"){
      this.router.navigate(['Alumno/Dashboard']);
    }else{
      this.router.navigate(['Docente/Dashboard']);
    }
  }

}
