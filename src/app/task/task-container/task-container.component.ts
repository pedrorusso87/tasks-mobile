import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as moment from 'moment';
import { Task } from 'src/app/services/task-service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
@Input() task: Task;

  constructor(private router: Router) { }

  ngOnInit() {}

  getFormattedDate(date: Date) {
    return moment(date).format('YYYY/MM/DD');
  }

  onTaskClicked() {
    const extras: NavigationExtras = {
      queryParams: {
        createdDate: moment(this.task.createdDate).format('MM/DD/YYYY'),
        dueDate: moment(this.task.createdDate).format('MM/DD/YYYY'),
        owner: this.task.owner
      }
    };
    this.router.navigate(['/task-detail'], extras);
  }

}
