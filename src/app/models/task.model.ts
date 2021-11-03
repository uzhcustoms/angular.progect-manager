export class Task {
    id: number = 0;
    name: string = "";
    projectId: number = 0;
    description: string = "";
    comments: string = "";
    constructor(task?:Task){
        if(task){
            this.id=task.id;
            this.name=task.name;
            this.projectId=task.projectId;
            this.description=task.description;
            this.comments=task.comments;
        }
    }
}