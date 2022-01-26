import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Task } from 'src/app/services/task-service';
import * as fromTasks from '../../home/store/index';
@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  getTaskPending$ = this.store.select(fromTasks.getTasksPending);
  getTasks$ = this.store.select(fromTasks.getTasks);
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
    return moment(date).format('DD-MM-YY');
  }

  onTaskClicked(task) {
    const extras: NavigationExtras = {
      queryParams: {
        createdDate: moment(task.createdDate).format('DD-MM-YYYY'),
        dueDate: moment(task.createdDate).format('DD-MM-YYYY'),
        owner: task.owner,
        description: task.description,
      },
    };
    this.router.navigate(['/task-detail'], extras);
  }
}
