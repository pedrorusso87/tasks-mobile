import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface TasksStatus {
  id: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksStatusService {
  private url = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  public getTasksStatus(): Observable<any> {
    return this.httpClient.get(`${this.url}/status`);
  }
}
