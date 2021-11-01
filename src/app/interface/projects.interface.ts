export class Progect {
    id: number = 0;
    name: string = "";
    description: string = "";
    tasks: Task[] = [];
    constructor(project?:Progect){
        if(project){
            this.id=project.id;
            this.name=project.name;
            this.description=project.description;
            this.tasks=project.tasks;
        }

    }
}

export class Task {
    id: number = 0;
    name: string = "";
    projectId: number = 0;
    description: string = "";
    comments: string = "";
}

export interface ButtonsNav {
    buttonName: string,
    path: string
}
