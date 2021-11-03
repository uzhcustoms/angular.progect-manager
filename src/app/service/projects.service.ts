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
  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(Projects)
  }

  setIndex(val: number) {
    this.index = val;
  }

  getIndex() {
    return this.index;
  }
} 
