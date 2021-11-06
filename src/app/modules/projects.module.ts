import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsRoutingModule } from '../routings/projects-routing.module';
import { ProjectsService } from '../service/projects.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
