import { Progect } from '../interface/projects.interface';

export const Progects: Progect[] = [
    {
        id: 1,
        name: "Progect 1",
        description: "Text 1",
        tasks: [{ id: 1, name: "Tasks 1", projectId: 1, description: "Text task 1", comments: "Comments task 1" },
        { id: 2, name: "Tasks 2", projectId: 1, description: "Text task 2", comments: "Comments task 2" },
        { id: 3, name: "Tasks 3", projectId: 1, description: "Text task 3", comments: "Comments task 3" },
        { id: 4, name: "Tasks 4", projectId: 1, description: "Text task 4", comments: "Comments task 4" },
        { id: 5, name: "Tasks 5", projectId: 1, description: "Text task 5", comments: "Comments task 5" },
        { id: 6, name: "Tasks 6", projectId: 1, description: "Text task 6", comments: "Comments task 6" }]
    },
    {
        id: 2,
        name: "Progect 2",
        description: "Text 2",
        tasks: [{ id: 1, name: "Tasks 1", projectId: 2, description: "Text task 1", comments: "Comments task 1" },
        { id: 2, name: "Tasks 2", projectId: 2, description: "Text task 2", comments: "Comments task 2" },
        { id: 3, name: "Tasks 3", projectId: 2, description: "Text task 3", comments: "Comments task 3" },
        { id: 4, name: "Tasks 4", projectId: 2, description: "Text task 4", comments: "Comments task 4" },
        { id: 5, name: "Tasks 5", projectId: 2, description: "Text task 5", comments: "Comments task 5" },
        { id: 6, name: "Tasks 6", projectId: 2, description: "Text task 6", comments: "Comments task 6" }]
    },
    {
        id: 3,
        name: "Progect 3",
        description: "Text 3",
        tasks: [{ id: 1, name: "Tasks 1", projectId: 3, description: "Text task 1", comments: "Comments task 1" },
        { id: 2, name: "Tasks 2", projectId: 3, description: "Text task 2", comments: "Comments task 2" },
        { id: 3, name: "Tasks 3", projectId: 3, description: "Text task 3", comments: "Comments task 3" },
        { id: 4, name: "Tasks 4", projectId: 3, description: "Text task 4", comments: "Comments task 4" },
        { id: 5, name: "Tasks 5", projectId: 3, description: "Text task 5", comments: "Comments task 5" },
        { id: 6, name: "Tasks 6", projectId: 3, description: "Text task 6", comments: "Comments task 6" }]
    },
    {
        id: 4,
        name: "Progect 4",
        description: "Text 4",
        tasks: [{ id: 1, name: "Tasks 1", projectId: 4, description: "Text task 1", comments: "Comments task 1" },
        { id: 2, name: "Tasks 2", projectId: 4, description: "Text task 2", comments: "Comments task 2" },
        { id: 3, name: "Tasks 3", projectId: 4, description: "Text task 3", comments: "Comments task 3" },
        { id: 4, name: "Tasks 4", projectId: 4, description: "Text task 4", comments: "Comments task 4" },
        { id: 5, name: "Tasks 5", projectId: 4, description: "Text task 5", comments: "Comments task 5" },
        { id: 6, name: "Tasks 6", projectId: 4, description: "Text task 6", comments: "Comments task 6" }]
    },
    {
        id: 5,
        name: "Progect 5",
        description: "Text 5",
        tasks: [{ id: 1, name: "Tasks 1", projectId: 5, description: "Text task 1", comments: "Comments task 1" },
        { id: 2, name: "Tasks 2", projectId: 5, description: "Text task 2", comments: "Comments task 2" },
        { id: 3, name: "Tasks 3", projectId: 5, description: "Text task 3", comments: "Comments task 3" },
        { id: 4, name: "Tasks 4", projectId: 5, description: "Text task 4", comments: "Comments task 4" },
        { id: 5, name: "Tasks 5", projectId: 5, description: "Text task 5", comments: "Comments task 5" },
        { id: 6, name: "Tasks 6", projectId: 5, description: "Text task 6", comments: "Comments task 6" }]
    },
    {
        id: 6,
        name: "Progect 6",
        description: "Text 6",
        tasks: [{ id: 1, name: "Tasks 1", projectId: 6, description: "Text task 1", comments: "Comments task 1" },
        { id: 2, name: "Tasks 2", projectId: 6, description: "Text task 2", comments: "Comments task 2" },
        { id: 3, name: "Tasks 3", projectId: 6, description: "Text task 3", comments: "Comments task 3" },
        { id: 4, name: "Tasks 4", projectId: 6, description: "Text task 4", comments: "Comments task 4" },
        { id: 5, name: "Tasks 5", projectId: 6, description: "Text task 5", comments: "Comments task 5" },
        { id: 6, name: "Tasks 6", projectId: 6, description: "Text task 6", comments: "Comments task 6" }]
    },
    {
        id: 7,
        name: "Progect 7",
        description: "Text 7",
        tasks: [{ id: 1, name: "Tasks 1", projectId: 7, description: "Text task 1", comments: "Comments task 1" },
        { id: 2, name: "Tasks 2", projectId: 7, description: "Text task 2", comments: "Comments task 2" },
        { id: 3, name: "Tasks 3", projectId: 7, description: "Text task 3", comments: "Comments task 3" },
        { id: 4, name: "Tasks 4", projectId: 7, description: "Text task 4", comments: "Comments task 4" },
        { id: 5, name: "Tasks 5", projectId: 7, description: "Text task 5", comments: "Comments task 5" },
        { id: 6, name: "Tasks 6", projectId: 7, description: "Text task 6", comments: "Comments task 6" }]
    },

];

// localStorage.setItem('progects', JSON.stringify(Progects));