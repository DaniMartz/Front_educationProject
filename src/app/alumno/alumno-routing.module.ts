import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAlumnoContainer } from "./containers/dashboard-alumno/dashboard-alumno.container";
import { MateriaAlumnoContainer } from "./containers/materia-alumno/materia-alumno.container";

const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardAlumnoContainer
  },
  {
    path: 'Materia/:nombre',
    component: MateriaAlumnoContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
