import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apiresponse } from '../apiresponse';
import { Observable } from 'rxjs';
import { Item } from '../apiresponse';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  apiURL = "https://freeapi.gerasim.in/api/JWT/";

  getAllTaskList(): Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.apiURL + "GetAllTaskList");
  }

  createNewTask(task:Item): Observable<Apiresponse>{
    return this.http.post<Apiresponse>(this.apiURL + "CreateNewTask", task);
  }

  deleteTask(itemId: Number): Observable<Apiresponse>{
    return this.http.delete<Apiresponse>(this.apiURL + "DeleteTask?itemId="+ itemId)
  }

  editTask(task: Item): Observable<Apiresponse>{
    return this.http.put<Apiresponse>(this.apiURL+ "UpdateTask", task)
  }
}
