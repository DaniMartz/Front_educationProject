import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
