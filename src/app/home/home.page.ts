import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskService, Task } from '../services/task-service';
import * as fromHome from './store/home-actions';
import * as moment from 'moment/moment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  task: Task = {
    description: 'sarasa',
    createdDate: moment().toDate(),
    dueDate: moment().toDate(),
    owner: 'asdk'
  };
  constructor(private taskService: TaskService, private store: Store) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit(): void {

    this.store.dispatch(new fromHome.GetTasks());
  }

  getMessages() {
    //return this.taskService.getTasks();
  }
}
