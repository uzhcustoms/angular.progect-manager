import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Project } from '../../models/project.model';
import { Task } from 'src/app/models/task.model';
import { FormStatus } from 'src/app/models/form-status.enum';

@Component({
  selector: 'form-component',
  templateUrl: './form-component.html',
  styleUrls: ['./form-component.css'],
})
export class FormComponent implements OnInit{

@Input() 
set formStatus(value: FormStatus) {
  this._formStatus = value;
}
get formStatus(): FormStatus {
  return this._formStatus;
}

@Input() 
set task(task: Task) {
  this._task = task;
  this.taskForm.patchValue({
      id: this._task.id,
      name: this._task.name,
      projectId: this._task.projectId,
      description: this._task.description,
      comments: this._task.comments
  });
} 
get task(): Task {
  return this._task; 
}

@Output() taskEvent = new EventEmitter<Task>();
@Output() formStatusEvent = new EventEmitter<FormStatus>();

private _task: Task = new Task();
private _formStatus: FormStatus = FormStatus.none;

public taskForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    projectId: new FormControl(0),
    description: new FormControl(''),
    comments: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void { }

  public showForm() {
    return this.formStatus !== FormStatus.none;
  }

  public showTitleAddForm() {
    return this.formStatus == FormStatus.add;
  }
  
  saveForm() {
    if (this.formStatus == FormStatus.edit) {
      this.task.id = this.taskForm.value.id;
      this.task.projectId = this.taskForm.value.projectId;
    } 
      this.task.name = this.taskForm.value.name;
      this.task.description = this.taskForm.value.description;
      this.task.comments = this.taskForm.value.comments;
    this.taskEvent.emit(this.task);
    this._task = new Task();
    this.formStatus = FormStatus.none;
    this.taskForm.reset();
  }
  
  exitForm() {
    this.taskForm.reset();
    this.formStatus = FormStatus.none;
    this.formStatusEvent.emit(this.formStatus);
  }
}


