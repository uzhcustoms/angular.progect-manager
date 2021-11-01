import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Progect } from '../../../interface/projects.interface';
import { ProgectsService } from '../progects.service';
import { Progects } from '../../../data/projects.data';
import { Router } from '@angular/router';
import { TasksService } from '../../tasks/tasks.service';


@Component({
  selector: 'app-progects',
  templateUrl: './progects.component.html',
  styleUrls: ['./progects.component.css']
})
export class ProgectsComponent implements OnInit {

  idxProgect: number = 0;

  progects: Progect[]=[];
  inputNameProgect: string = '';
  inputDescriptionProgect: string = '';
  toggleEditProgect: boolean = true;
  editName: string = "";
  editDescription: string = "";
  editIdx: number = 0;
  currentProject:Progect=new Progect();
  editingProject:Progect=new Progect();
  path: string = 'tasks';


  constructor(private progectsService: ProgectsService,
    private router: Router,
    private tasksService: TasksService) { 
      this.getProgects();

    }

ngOnInit(): void {
    

    console.log(this.progects);
    // this.progectsService.passedData.next(this.idxProgect);
    // this.progectsService.set('progects', this.progects).subscribe((data: any) => {
    //   console.log(data);
    // });
    localStorage.setItem('progects', JSON.stringify(Progects));
  }

  getProgects(): void {
    this.progectsService.getProgects().subscribe(data => this.progects = data);
  }

  // getIdxProgect(): any {
  //   return this.idxProgect;
  // }

  // someData() {
  //   this.progectsService.set('progects', this.progects);
  // }

  // someOtherMethod() {
  //   const myData = this.progectsService.get('progects');
  // }

  removeProgect(item: Progect) {
    let index = this.progects.indexOf(item);
    this.progects.splice(index, 1);
    this.toggleEditProgect = true;
  }

  editProgect(item: Progect) {
    this.toggleEditProgect = false;

    this.currentProject = item;
    this.editingProject=item;
    /*this.editIdx = this.progects.indexOf(item);
    this.editName = this.progects[this.editIdx].name;
    this.editDescription = this.progects[this.editIdx].description;*/
  }

  // test commit
  onSubmitCreateProduct(e: any) {
    e.preventDefault();
    if (this.inputNameProgect != "") {
      this.progects.push({
        id: this.progects[this.progects.length - 1].id + 1,
        name: this.inputNameProgect,
        description: this.inputDescriptionProgect,
        tasks: []
      })
    }
  }

  onSubmitEditProduct(e: any) {
    e.preventDefault();
    //currentProject.name
    
    console.log(this.currentProject);
    this.editIdx = this.progects.indexOf(this.currentProject);
    console.log(this.editIdx);
    let tempProject:Progect=new Progect(this.currentProject);
    this.progects[this.editIdx].name = this.currentProject.name;
    this.progects[this.editIdx].description = this.currentProject.description;
    this.toggleEditProgect = true;
  }

  navigate(path: any) {
    this.router.navigate([path])
  }

  getIdx(item: any) {
    this.idxProgect = this.progects.indexOf(item);
    this.tasksService.idxProgect = this.idxProgect;
    console.log(this.idxProgect);
  }

  

}
