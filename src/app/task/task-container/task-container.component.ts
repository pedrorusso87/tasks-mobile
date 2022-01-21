import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Task } from 'src/app/services/task-service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
@Input() task: Task;

  constructor() { }

  ngOnInit() {}

  getFormattedDate(date: Date) {
    return moment().format('YYYY/MM/DD');
  }

}
