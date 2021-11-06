import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../service/projects.service';
import { Projects } from '../../data/projects.data';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  
})
export class ProjectsComponent implements OnInit {
  
  id: number = 0;
  adding: boolean = false;
  editing: boolean = false;
  editingIndex: number = 0;

  projects: Project[]=[];
  projectForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    tasks: new FormControl([]),
  });

 
  displayedColumns: string[] = ['name', 'description', 'id'];
  dataSource:Project[]=[];
  // dataSorce: projects;
     
  constructor(private projectsService: ProjectsService, private activateRoute: ActivatedRoute   ) { 
    this.getProjects();
  }

  ngOnInit(): void {
    // this.refresh()
    // localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  getProjects(): void {
    this.projectsService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
      this.projectListTableRefresh();
     } );
  }

  // refresh() {
  //   this.projectsService.getProjects().subscribe((data: Project[]) => {
  //     this.dataSource.data = data;
  //   });
  // }

  onSubmit() {
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
    },100);
  }
}
