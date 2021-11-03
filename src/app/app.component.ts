import { Component } from '@angular/core';
import { ButtonsNav } from './models/buttons.models'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Project manager";
  
  navButtons: ButtonsNav[] = [
    {
      buttonName: "home",
      path: '',
    },
    {
      buttonName: "projects",
      path: 'projects',
    }
  ];

  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path])
  }
}
