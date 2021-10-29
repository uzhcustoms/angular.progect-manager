export class Progect {
    id: number = 0;
    name: string = "";
    description: string = "";
    tasks: Task[] = [];
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
