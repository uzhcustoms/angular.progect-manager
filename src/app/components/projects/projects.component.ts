import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../service/projects.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Projects } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  
})
export class ProjectsComponent implements OnInit {
  
  public id: number = 0;
  public adding: boolean = false;
  public editing: boolean = false;
  public editingIndex: number = 0;

  public projects: Project[] = [];
  public projectForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required, Validators.pattern(/^.{2,35}$/)]),
    description: new FormControl(''),
    tasks: new FormControl([]),
  });
 
  public displayedColumns: string[] = ['name', 'description', 'id'];
  public dataSource: Project[] = [];
       
  constructor(private projectsService: ProjectsService, private activateRoute: ActivatedRoute, private fb: FormBuilder,  ) { 
    this.getProjects();
  }

  ngOnInit(): void {
    // localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  getProjects(): void {
    this.projectsService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
      this.projectListTableRefresh();
     } );
  }

  saveDataProjects() {
    const maxId = Math.max(...this.projects.map(item => item.id), 0);
    const project = this.projectForm.value as Project;
    if ( this.projectForm.value.name != "") {
      if (this.editing) {
          this.projects.splice(this.editingIndex, 1, project);
      } else {
          this.projectForm.value.id = maxId + 1;
          this.projectForm.value.tasks = [];
          this.projects.push(project);
      }
    }
   this.projectListTableRefresh();
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
      tasks: project.tasks
    });
    this.editing = true;
    this.editingIndex = index;
  }

  onDelete(index: number) {
    this.projects.splice(index, 1);
    this.projectListTableRefresh();
    console.log(this.projects)
  }

  exitForm() {
    this.adding = false;
    this.editing = false;
    this.projectForm.reset();
  }

  getItemIndex() {
     this.activateRoute.snapshot.params['id'];
  }

  private projectListTableRefresh(){
    this.dataSource = [];
    setTimeout(()=>{
      this.dataSource=this.projects;
    },50);
  }
}
