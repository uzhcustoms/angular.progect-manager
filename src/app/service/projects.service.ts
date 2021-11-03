import { Injectable } from '@angular/core';
import { Projects } from '../data/projects.data';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  index: number = 0;
  project = Project;
  
  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(Projects)
  }

  getProjectById(id: number): Observable<Project> {
    let project: Project = <Project>Projects.find((projectItem: Project) => projectItem.id == id);
    return of(project)
  }
} 
