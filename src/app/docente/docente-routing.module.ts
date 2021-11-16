import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDocenteContainer } from "./containers/dashboard-docente/dashboard-docente.container";
import { MateriaDocenteContainer } from "./containers/materia-docente/materia-docente.container";

const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardDocenteContainer
  },
  {
    path: 'Materia/:nombre',
    component: MateriaDocenteContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
