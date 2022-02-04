import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { AddTaskRequest } from '../models/task-model';
import * as fromPriorities from '../../priorities/store';
import {
  PrioritiesResponse,
  Priority,
} from 'src/app/priorities/models/priorities-model';
import { TaskActions } from '../store/actions';
import { PrioritiesActions } from 'src/app/priorities/store/actions';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  today = moment().format('YYYY-MM-DD');
  getPrioritiesPending$ = this.store.select(
    fromPriorities.selectGetPrioritiesPending
  );
  getPriorities$ = this.store.select(fromPriorities.selectGetPriorities);
  priorities: PrioritiesResponse;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(PrioritiesActions.GetPriorities());
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
    this.store.dispatch(TaskActions.AddTask({ payload: request }));
  }
}
