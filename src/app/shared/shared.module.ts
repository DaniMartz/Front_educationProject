import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [ModalComponent]
})
export class SharedModule { }
