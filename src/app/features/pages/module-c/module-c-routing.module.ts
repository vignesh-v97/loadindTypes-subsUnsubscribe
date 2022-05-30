import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleCComponent } from './module-c.component';

const routes: Routes = [{ path: '', component: ModuleCComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleCRoutingModule { }
