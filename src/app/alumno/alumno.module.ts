import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevextremeModule } from "../devextreme/devextreme.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AlumnoRoutingModule } from "./alumno-routing.module";
import { DashboardAlumnoContainer } from './containers/dashboard-alumno/dashboard-alumno.container';
import { MateriaAlumnoContainer } from './containers/materia-alumno/materia-alumno.container';
import { AvisosAlumnoComponent } from './components/avisos-alumno/avisos-alumno.component';

@NgModule({
  declarations: [DashboardAlumnoContainer, MateriaAlumnoContainer, AvisosAlumnoComponent],
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
