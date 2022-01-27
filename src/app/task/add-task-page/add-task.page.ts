import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  today = moment().format('YYYY-MM-DD');
  constructor() {}

  ngOnInit() {
    console.log(this.today);
  }
}
