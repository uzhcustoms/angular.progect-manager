import { Task } from './task.model';

export class Project {
    id: number = 0;
    name: string = "";
    description: string = "";
    tasks: Task[] = [];
    constructor(project?:Project){
        if(project){
            this.id=project.id;
            this.name=project.name;
            this.description=project.description;
            this.tasks=project.tasks;
        }
    }
}




