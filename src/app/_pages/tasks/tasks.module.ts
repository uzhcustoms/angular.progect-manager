import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { TasksService } from './tasks.service';



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
    TasksService
  ]
})
export class TasksModule { }
