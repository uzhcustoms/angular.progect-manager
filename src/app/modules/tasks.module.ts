import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../components/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksRoutingModule } from '../routings/tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from '../service/projects.service';



@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TasksRoutingModule,

  ],
  providers: [
    ProjectsService
  ]
})
export class TasksModule { }
