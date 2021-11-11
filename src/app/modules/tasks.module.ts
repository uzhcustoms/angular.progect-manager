import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../components/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksRoutingModule } from '../routings/tasks-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProjectsService } from '../service/projects.service';
// import { FormComponent } from '../components/form/form-component';
@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    ProjectsService
  ]
})
export class TasksModule { }
