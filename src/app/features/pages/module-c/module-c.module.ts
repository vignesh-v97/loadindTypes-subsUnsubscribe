import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCRoutingModule } from './module-c-routing.module';
import { ModuleCComponent } from './module-c.component';


@NgModule({
  declarations: [
    ModuleCComponent
  ],
  imports: [
    CommonModule,
    ModuleCRoutingModule
  ]
})
export class ModuleCModule { }
