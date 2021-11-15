import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevextremeModule } from "../devextreme/devextreme.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DocenteRoutingModule } from "./docente-routing.module";
import { DashboardDocenteContainer } from './containers/dashboard-docente/dashboard-docente.container';
import { MateriaDocenteContainer } from './containers/materia-docente/materia-docente.container';
import { AvisosDocenteComponent } from './components/avisos-docente/avisos-docente.component';
import { CalificacionesDocenteComponent } from './components/calificaciones-docente/calificaciones-docente.component';


@NgModule({
  declarations: [DashboardDocenteContainer, MateriaDocenteContainer, AvisosDocenteComponent, CalificacionesDocenteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DocenteRoutingModule,
    DevextremeModule
  ]
})
export class DocenteModule { }
