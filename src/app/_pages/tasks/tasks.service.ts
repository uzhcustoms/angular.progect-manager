import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Progects } from '../../data/projects.data';
import { Progect } from '../../interface/projects.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  idxProgect: number = 0;

  constructor() { }

  getProgects(): Observable<Progect[]> {
    return of(Progects)
  }
}
