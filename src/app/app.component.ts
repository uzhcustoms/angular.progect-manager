import { Component } from '@angular/core';
import { ButtonsNav } from './interface/projects.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Progect manager";
  // idxProgect: number = 0;

  navButtons: ButtonsNav[] = [
    {
      buttonName: "home",
      path: '',
    },
    {
      buttonName: "progects",
      path: 'progects',
    }
  ];

  constructor(private router: Router) { }

  navigate(path: any) {
    this.router.navigate([path])
  }
}
