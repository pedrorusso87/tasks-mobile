import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { PrioritiesActions } from 'src/app/priorities/store/actions';
import { Task } from 'src/app/services/task-service';
import * as fromTasks from '../../task/store/index';
import { TaskStatusActions } from '../store/actions';
@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  getTaskPending$ = this.store.select(fromTasks.selectGetTasksPending);
  getTasks$ = this.store.select(fromTasks.selectGetTasksSuccess);
  loading = true;
  tasks: Task[];

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.getTaskPending$.pipe().subscribe((pending) => {
      if (!pending) {
        this.getTasks$.pipe().subscribe((tasks) => {
          this.tasks = tasks;
          this.loading = false;
        });
      }
    });
  }

  getFormattedDate(date: Date) {
    //this seems odd, it is to suppress a deprecation warning thrown by moment
    return moment(date, 'DD-MM-YY').format('DD-MM-YY');
  }

  onTaskClicked(task) {
    console.log(task);
    this.store.dispatch(PrioritiesActions.GetPriorities());
    this.store.dispatch(TaskStatusActions.getTasksStatus());
    const extras: NavigationExtras = {
      queryParams: {
        createdDate: moment(task.createdDate).format('DD-MM-YYYY'),
        dueDate: moment(task.dueDate).format('DD-MM-YYYY'),
        owner: task.responsible.username,
        description: task.description,
        status: task.status.description,
        priority: task.priority.description,
        taskId: task.id,
      },
    };
    this.router.navigate(['/task-detail'], extras);
  }
}
