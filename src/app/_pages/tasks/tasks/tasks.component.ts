import { Component, OnInit, Input, Output } from '@angular/core';
import { ProgectsComponent } from '../../progects/progects/progects.component';
import { ProgectsService } from '../../progects/progects.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  progects: any;
  inputNameTask: string = '';
  inputDescriptionTask: string = '';
  inputCommentsTasks: string = '';
  toggleEditTask: boolean = true;
  editNameTasks: string = "";
  editDescriptionTasks: string = "";
  editCommentsTasks: string = "";
  editIdx: number = 0;

  constructor(private progectsService: ProgectsService,
    public tasksService: TasksService) { }


  getProgects(): void {
    this.progectsService.getProgects().subscribe(data => this.progects = data);
  }

  removeTasks(item: any) {
    let index = this.progects[this.tasksService.idxProgect].tasks.indexOf(item);
    this.progects[this.tasksService.idxProgect].tasks.splice(index, 1);
    this.toggleEditTask = true;
  }

  editTasks(item: any) {
    this.toggleEditTask = false;
    this.editIdx = this.progects[this.tasksService.idxProgect].tasks.indexOf(item);
    this.editNameTasks = this.progects[this.tasksService.idxProgect].tasks[this.editIdx].name;
    this.editDescriptionTasks = this.progects[this.tasksService.idxProgect].tasks[this.editIdx].description;
    this.editCommentsTasks = this.progects[this.tasksService.idxProgect].tasks[this.editIdx].comments;

  }

  onSubmitEditTasks(e: any) {
    e.preventDefault();
    this.progects[this.tasksService.idxProgect].tasks[this.editIdx].name = this.editNameTasks;
    this.progects[this.tasksService.idxProgect].tasks[this.editIdx].description = this.editDescriptionTasks;
    this.progects[this.tasksService.idxProgect].tasks[this.editIdx].comments = this.editCommentsTasks;
    this.toggleEditTask = true;
  }

  onSubmitCreateTask(e: any) {
    e.preventDefault();
    let id;
    if (this.progects[this.tasksService.idxProgect].tasks.length != 0) {
      id = this.progects[this.tasksService.idxProgect].tasks[this.progects[this.tasksService.idxProgect].tasks.length - 1].id
    } else {
      id = 0
    }

    if (this.inputNameTask != "") {
      this.progects[this.tasksService.idxProgect].tasks.push({
        id: id + 1,
        name: this.inputNameTask,
        projectId: this.tasksService.idxProgect,
        description: this.inputDescriptionTask,
        comments: this.inputCommentsTasks
      })
    }
  }

  ngOnInit(): void {
    this.getProgects()
    // this.progectsService.passedData.subscribe(data => this.idxProgect = data);
    // console.log(this.idxProgect)
  }

}
