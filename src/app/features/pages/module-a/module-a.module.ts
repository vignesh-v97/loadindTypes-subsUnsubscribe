import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { ModuleAComponent } from './module-a.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModuleAComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule { }
