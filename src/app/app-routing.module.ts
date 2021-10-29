import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_pages/progects/progects.module').then(m => m.ProgectsModule)
  },
  {
    path: 'progects',
    loadChildren: () => import('./_pages/progects/progects.module').then(m => m.ProgectsModule)
  },
  // {
  //   path: 'tasks',
  //   loadChildren: () => import('./_pages/tasks/tasks.module').then(m => m.TasksModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
