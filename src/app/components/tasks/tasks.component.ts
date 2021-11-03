import { Component, OnInit,Input } from '@angular/core';
import { ProjectsService } from '../../service/projects.service';
import { Task } from '../../models/task.model';
import { Project } from '../../models/project.model';
import { Projects } from '../../data/projects.data';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
   index: number = 0; 
   project: Project = new Project();
   projects: Project[] = [];
   constructor(public projectsService: ProjectsService) {
      this.getProjects();
   }

   getProjects(): void {
     this.projectsService.getProjects().subscribe(data => this.projects = data);
      this.index = this.projectsService.getIndex();
      this.project = this.projects[this.index];
   }

   
   test() {
     console.log(this.project);
   }

   ngOnInit(): void {
      
   }
   
}
