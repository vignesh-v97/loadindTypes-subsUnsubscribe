import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './core/custom-preloading-strategy.service';
import { ModuleBModule } from './features/pages/module-b/module-b.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'module-a',
    pathMatch: 'full'
  },
  { 
    path: 'module-a',
    loadChildren: () => import('./features/pages/module-a/module-a.module').then(
      m => m.ModuleAModule) 
  },
  { 
    path: 'module-b',
    loadChildren: () => import('./features/pages/module-b/module-b.module').then(
      m => m.ModuleBModule),
    data: {preload: true}
  },
  { path: 'module-c',
    loadChildren: () => import('./features/pages/module-c/module-c.module').then(
      m => m.ModuleCModule)
  },
  { 
    path: 'task-two',
    loadChildren: () => import('./features/pages/task-two/task-two.module').then(
      m => m.TaskTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: CustomPreloadingStrategyService
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
