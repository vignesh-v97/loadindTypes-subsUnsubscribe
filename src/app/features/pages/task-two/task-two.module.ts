import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskTwoRoutingModule } from './task-two-routing.module';
import { TaskTwoComponent } from './task-two.component';


@NgModule({
  declarations: [
    TaskTwoComponent
  ],
  imports: [
    CommonModule,
    TaskTwoRoutingModule
  ]
})
export class TaskTwoModule { }
