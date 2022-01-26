import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Task {
  description: string;
  createdDate: Date;
  dueDate: Date;
  owner: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<any> {
    return this.httpClient.get(`${this.url}/tasks`);
  }
}
