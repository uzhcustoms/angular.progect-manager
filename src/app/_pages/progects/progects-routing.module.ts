import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgectsComponent } from './progects/progects.component';
import { TasksComponent } from '../../_pages/tasks/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: ProgectsComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgectsRoutingModule { }
