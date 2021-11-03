import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects.module').then(m => m.ProjectsModule)
  },
 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
