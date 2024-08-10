import { Component , inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './service/master.service';
import { Apiresponse, Item } from './apiresponse';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'TODO';
  masterService: MasterService = inject(MasterService);
  taskItem: Item[] = [];

  task: Item = new Item();

  ngOnInit(): void {
    this.loadAllTask();
  }

  loadAllTask(){
    this.masterService.getAllTaskList().subscribe(res => {
      this.taskItem = res.data;
    })
  }

  createNewTask(task: Item){
    this.masterService.createNewTask(task).subscribe((res) => {
      if(res.result){
        alert(res.message);
      }else{
        alert(res.message);
      }
      this.loadAllTask();
    })
    this.task = new Item();
  }

  deleteTask(itemId: Number){
    let confirmation = confirm("Do you really want to delete this task?");
    if(confirmation){
      this.masterService.deleteTask(itemId).subscribe( res => {
        if(res.result){
        }else{
          alert(res.message);
        }
        this.loadAllTask();
      })
    }
  }

  editTask(Task: Item){
    this.task = Task;
    let selectedDate: Date = new Date(this.task.dueDate);
    let day : string | Number = selectedDate.getDate();
    day = day.toString.length == 2 ? day : "0" + day;
    let month: string | Number = selectedDate.getMonth() + 1;
    month = month.toString.length == 2 ? month : "0" + month;
    console.log("value of month is ", month);  
    let year = selectedDate.getFullYear();
    let fullDate = year + "-" + month + "-" + day;
    console.log("date is :", fullDate);
    setTimeout(() => {
      (document.getElementById('date') as HTMLInputElement).value = fullDate;
    }, 1000);
    
    console.log("task is", this.task);
  }

  onUpdateTask(task: Item){
    this.masterService.editTask(task).subscribe(res => {
      if(res.result){
        alert(res.message);
        this.loadAllTask();
      }
    })
    this.loadAllTask();
    this.task = new Item();
  }

}
