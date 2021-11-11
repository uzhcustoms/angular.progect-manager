import { Component, OnInit,Input } from '@angular/core';
import { ProjectsService } from '../../service/projects.service';
import { Project } from '../../models/project.model';
import { Task } from 'src/app/models/task.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { FormStatus } from 'src/app/models/form-status.enum';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  
  public formStatus: FormStatus = FormStatus.none;
  public id: number = 0; 
  public project: Project=new Project();
  public editingIndex: number = 0;
  public task: Task = new Task();
  public displayedColumns: string[] = ['name', 'description', 'comments', 'id'];
  public dataSource: Task[] = [];

  constructor(public projectsService: ProjectsService,
    private activateRoute: ActivatedRoute) {
      this.getProject();
    }

  ngOnInit(): void {}

  getProject(): void {
      this.activateRoute.params.subscribe(params=> this.id = params['id']);
      // this.projectsService.getProjects().subscribe(data => console.log(data[this.id]));
      this.projectsService.getProjects().subscribe((data: Project[]) => {
        this.project = data[this.id];
        this.projectListTableRefresh();
      });
  }
  
  saveDataTasks(task: Task) {
    const maxId = Math.max(...this.project.tasks.map(item => item.id), 0);
    if (task.name != "") {
      if (task.id > 0) {
        this.project.tasks.splice(this.editingIndex, 1, task);
      } else {
        task.id = maxId + 1;
        task.projectId = this.project.id;
        this.project.tasks.push(task);
      }
    }
      this.projectListTableRefresh();
      console.log(this.project.tasks);
      this.task = new Task();
      this.formStatus = FormStatus.none;
  }

  setAddForm() {
    this.task = new Task();
    this.formStatus = FormStatus.add;
    console.log(`formStatus - ${this.formStatus}`);
  }

  setEditForm(task: Task, index: number) {
    this.task = task;
    this.editingIndex = index;
    this.formStatus = FormStatus.edit;
    console.log(`formStatus - ${this.formStatus}`);
  }

  onDelete(index: number) {
    this.project.tasks.splice(index, 1);
    this.projectListTableRefresh();
  }

  private projectListTableRefresh(){
    this.dataSource = [];
    setTimeout(()=>{
      this.dataSource=this.project.tasks;
    },50);
  }

  setFormStatus(formStatus: FormStatus) {
    this.formStatus = formStatus;
  }
   
}
