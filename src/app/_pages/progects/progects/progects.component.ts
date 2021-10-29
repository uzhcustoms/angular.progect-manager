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

  progects: any;
  inputNameProgect: string = '';
  inputDescriptionProgect: string = '';
  toggleEditProgect: boolean = true;
  editName: string = "";
  editDescription: string = "";
  editIdx: number = 0;

  path: string = 'tasks';


  constructor(private progectsService: ProgectsService,
    private router: Router,
    private tasksService: TasksService) { }


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

  removeProgect(item: any) {
    let index = this.progects.indexOf(item);
    this.progects.splice(index, 1);
    this.toggleEditProgect = true;
  }

  editProgect(item: any) {
    this.toggleEditProgect = false;
    this.editIdx = this.progects.indexOf(item);
    this.editName = this.progects[this.editIdx].name;
    this.editDescription = this.progects[this.editIdx].description;
  }

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
    this.progects[this.editIdx].name = this.editName;
    this.progects[this.editIdx].description = this.editDescription
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

  ngOnInit(): void {
    this.getProgects();

    console.log(this.progects);
    // this.progectsService.passedData.next(this.idxProgect);
    // this.progectsService.set('progects', this.progects).subscribe((data: any) => {
    //   console.log(data);
    // });
    localStorage.setItem('progects', JSON.stringify(Progects));
  }

}
