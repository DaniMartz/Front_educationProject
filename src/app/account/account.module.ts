import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevextremeModule } from '../devextreme/devextreme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AccountContainer } from './containers/account/account.container';
import { AlumnoAccountContainer } from './containers/alumno-account/alumno-account.container';
import { DocenteAccountContainer } from './containers/docente-account/docente-account.container';

@NgModule({
  declarations: [LoginComponent, AccountContainer, AlumnoAccountContainer, DocenteAccountContainer],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AccountRoutingModule,
    DevextremeModule
  ]
})
export class AccountModule { }
