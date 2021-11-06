import { Component, OnInit,Input } from '@angular/core';
import { ProjectsService } from '../../service/projects.service';
import { Project } from '../../models/project.model';
import { Task } from 'src/app/models/task.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
// import json from '../../../assets/projects.json';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  id: number = 0; 
  project: Project=new Project();
  adding: boolean = false;
  editing: boolean = false;
  editingIndex: number = 0;
  taskForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    projectId: new FormControl(0),
    description: new FormControl(''),
    comments: new FormControl(''),
  });

  // projects: any = json;

  constructor(public projectsService: ProjectsService,
    private activateRoute: ActivatedRoute) {
      this.getProject();
     
    }

    ngOnInit(): void {
       
      //  this.projectsService.getProjectById(this.id).subscribe((project: Project)=> this.project = project);
      this.projectsService.getProjects().subscribe(data => console.log(data[this.id]));
    }

    getProject(): void {
      // debugger
      this.activateRoute.params.subscribe(params=> this.id = params['id']);
      console.log(this.id)
      this.projectsService.getProjects().subscribe(data => this.project = data[this.id]);
      
    }
  
    onSubmit() {
    const maxId = Math.max(...this.project.tasks.map(item => item.id), 0);
    const tasks = this.taskForm.value as Task;
    if ( this.taskForm.value.name != "") {
      if (this.editing) {
          this.project.tasks.splice(this.editingIndex, 1, tasks);
      } else {
          this.taskForm.value.id = maxId + 1;
          this.taskForm.value.projectId = this.project.id;
          this.project.tasks.push(tasks);
      }
    }
   
    console.log(this.project)
    this.editing = false;
    this.adding = false;
    this.exitForm();
  }

  setEditForms(task: Task, index: number) {
    this.taskForm.patchValue({
      id: task.id,
      name: task.name,
      projectId: task.projectId,
      description: task.description,
      comments: task.comments
    });
    this.editing = true;
    this.editingIndex = index;
  }

  onDelete(index: number) {
    this.project.tasks.splice(index, 1);
  }

  exitForm() {
    this.adding = false;
    this.editing = false;
    this.taskForm.reset();
  }

  test() {
    this.projectsService.getProjects().subscribe(data => console.log(data));
    
  }
}
