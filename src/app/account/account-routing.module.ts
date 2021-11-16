import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountContainer } from "./containers/account/account.container";
import { AlumnoAccountContainer } from "./containers/alumno-account/alumno-account.container";
import { DocenteAccountContainer } from "./containers/docente-account/docente-account.container";

const routes: Routes = [
  {
    path: '',
    component: AccountContainer
  },
  {
    path: 'Alumno',
    component: AlumnoAccountContainer
  },
  {
    path: 'Docente',
    component: DocenteAccountContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
