import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAlumnoContainer } from "./containers/dashboard-alumno/dashboard-alumno.container";

const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardAlumnoContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
