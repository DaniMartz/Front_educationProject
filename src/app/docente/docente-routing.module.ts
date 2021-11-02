import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDocenteContainer } from "./containers/dashboard-docente/dashboard-docente.container";

const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardDocenteContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
