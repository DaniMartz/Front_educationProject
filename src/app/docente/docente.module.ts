import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DocenteRoutingModule } from "./docente-routing.module";
import { DashboardDocenteContainer } from './containers/dashboard-docente/dashboard-docente.container';


@NgModule({
  declarations: [DashboardDocenteContainer],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DocenteRoutingModule
  ]
})
export class DocenteModule { }
