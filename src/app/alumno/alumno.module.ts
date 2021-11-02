import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AlumnoRoutingModule } from "./alumno-routing.module";
import { DashboardAlumnoContainer } from './containers/dashboard-alumno/dashboard-alumno.container';

@NgModule({
  declarations: [DashboardAlumnoContainer],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
