import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { AddTaskRequest } from '../models/task-model';
import * as fromTasks from '../store';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  today = moment().format('YYYY-MM-DD');
  constructor(private store: Store) {}

  ngOnInit() {
    console.log(this.today);
  }

  addTask() {
    const request = {} as AddTaskRequest;
    this.store.dispatch(new fromTasks.AddTask(request));
  }
}
