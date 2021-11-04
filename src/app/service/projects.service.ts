import { Injectable } from '@angular/core';
import { Projects } from '../data/projects.data';
import { Project } from '../models/project.model';
import { Observable, throwError} from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = './assets/projects.json';
  constructor(private http: HttpClient) {}

  // getProjects(): Observable<Project[]> {
  //   return of(Projects)
  // }

  // getProjectById(id: number): Observable<Project> {
  //   let project: Project = <Project>Projects.find((projectItem: Project) => projectItem.id == id);
  //   return of(project)
  // }

  
   getProjects() {
    return this.getHttpData<Project[]>(this.projectsUrl).pipe<Project[]>(
      map(
      (projects: Project[]) => {
          return projects.map((project: Project) => new Project(project))
      }
      )
    );
  }

  public getHttpData<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe<T>(
      catchError(e => throwError(e))
    );
  }
} 
