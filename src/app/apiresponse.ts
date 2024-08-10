export interface Apiresponse {
    "message": "",
    "result": true,
    "data": []
}

export class Item{
    itemId: Number;
    taskName: string;
    taskDescription: string ;
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean; 
    tags: string;
    completedOn: Date;

    constructor(){
        this.itemId = 0;
        this.taskName = "";
        this.taskDescription = "";
        this.dueDate = new Date();
        this.createdOn = new Date();
        this.isCompleted = false;
        this.tags = "";
        this.completedOn = new Date();
    }
}
