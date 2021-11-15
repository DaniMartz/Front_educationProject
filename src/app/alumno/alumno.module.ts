import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevextremeModule } from "../devextreme/devextreme.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AlumnoRoutingModule } from "./alumno-routing.module";
import { DashboardAlumnoContainer } from './containers/dashboard-alumno/dashboard-alumno.container';
import { MateriaAlumnoContainer } from './containers/materia-alumno/materia-alumno.container';

@NgModule({
  declarations: [DashboardAlumnoContainer, MateriaAlumnoContainer],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AlumnoRoutingModule,
    DevextremeModule
    
  ]
})
export class AlumnoModule { }
