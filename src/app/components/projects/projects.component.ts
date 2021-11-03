import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../service/projects.service';
import { Projects } from '../../data/projects.data';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  adding: boolean = false;
  editing: boolean = false;
  editingIndex: number = 0;

  projects: Project[]=[];
  projectForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    task: new FormControl([]),
  });
  path: string = 'tasks';
 
  
  constructor(private projectsService: ProjectsService, private router: Router    ) { 
    this.getProjects();
  }

  ngOnInit(): void {
    localStorage.setItem('projects', JSON.stringify(Projects));
  }

  getProjects(): void {
    this.projectsService.getProjects().subscribe(data => this.projects = data);
  }

  onSubmit() {
    const maxId = Math.max(...this.projects.map(item => item.id), 0);
    const project = this.projectForm.value as Project;
    if ( this.projectForm.value.name != "") {
      if (this.editing) {
          this.projects.splice(this.editingIndex, 1, project);
      } else {
          this.projectForm.value.id = maxId + 1;
          this.projectForm.value.task = [];
          this.projects.push(project);
      }
    }
   
    console.log(this.projects)
    this.editing = false;
    this.adding = false;
    this.exitForm();
  }

  setEditForm(project: Project, index: number) {
    this.projectForm.patchValue({
      id: project.id,
      name: project.name,
      description: project.description,
      task: project.tasks
    });
    this.editing = true;
    this.editingIndex = index;
  }

  onDelete(index: number) {
    this.projects.splice(index, 1);
  }

  exitForm() {
    this.adding = false;
    this.editing = false;
    this.projectForm.reset();
  }

  getItem(index: number) {
    this.projectsService.index = index;
  }

  navigate(path: string) {
    this.router.navigate([path])
  }
}
