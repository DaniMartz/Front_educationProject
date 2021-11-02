import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutComponent } from "./shared/components/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Account',
    pathMatch: 'full'
  },
  {
    path: 'Account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule)
  },
  {
    path: 'Alumno',
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./alumno/alumno.module').then((m) => m.AlumnoModule)
      }
    ]
  },
  {
    path: 'Docente',
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./docente/docente.module').then((m) => m.DocenteModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
