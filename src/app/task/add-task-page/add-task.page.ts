import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { AddTaskRequest } from '../models/task-model';
import * as fromTasks from '../store';
import * as fromPriorities from '../../priorities/store';
import {
  PrioritiesResponse,
  Priority,
} from 'src/app/priorities/models/priorities-model';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  today = moment().format('YYYY-MM-DD');
  getPrioritiesPending$ = this.store.select(
    fromPriorities.getPrioritiesPending
  );
  getPriorities$ = this.store.select(fromPriorities.getPriorities);
  priorities: PrioritiesResponse;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new fromPriorities.GetPriorities());
    this.getPrioritiesPending$.subscribe((pending) => {
      if (!pending) {
        this.getPriorities$.subscribe((response) => {
          this.priorities = response;
        });
      }
    });
  }

  addTask() {
    const request = {} as AddTaskRequest;
    this.store.dispatch(new fromTasks.AddTask(request));
  }
}
