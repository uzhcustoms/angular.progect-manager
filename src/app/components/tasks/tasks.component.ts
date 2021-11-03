import { Component, OnInit,Input } from '@angular/core';
import { ProjectsService } from '../../service/projects.service';
import { Project } from '../../models/project.model';
import { Projects } from '../../data/projects.data';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
   id: number = 0; 
   project: Project;
   projects: Project[] = [];

   constructor(public projectsService: ProjectsService,
    private activateRoute: ActivatedRoute) {
      this.getProject();
   }

    getProject(): void {
      this.activateRoute.params.subscribe(params=> this.id = params['id']);
      this.project = this.projects[this.id];
    }
  
   ngOnInit(): void {
      this.projectsService.getProjectById(this.id).subscribe((project: Project)=> this.project = project);
   }

   test() {
     console.log(this.project)
   }
   
}
