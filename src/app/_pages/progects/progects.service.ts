import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Progects } from '../../data/projects.data';
import { Progect } from '../../interface/projects.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { TasksService } from '../tasks/tasks.service';
import { ProgectsComponent } from './progects/progects.component';

@Injectable({
  providedIn: 'root'
})
export class ProgectsService {

  constructor(private http: HttpClient) { }

  getProgects(): Observable<Progect[]> {
    return of(Progects)
  }

  // set(key: string, data: any): void {
  //   try {
  //     localStorage.setItem(key, JSON.stringify(data));
  //   } catch (e) {
  //     console.error('Error saving to localStorage', e);
  //   }
  // }

  // get(key: string) {
  //   try {
  //     let res;
  //     const storedPortfolio = localStorage.getItem(key);
  //     if (typeof storedPortfolio == 'string') {
  //       return res = JSON.parse(storedPortfolio);
  //     } else {
  //       return res = [];
  //     }

  //   } catch (e) {
  //     console.error('Error getting data from localStorage', e);
  //     return null;
  //   }
  // }
}
