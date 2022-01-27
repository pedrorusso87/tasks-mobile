import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromHome from '../store/task-actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  constructor(private store: Store) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromHome.GetTasks());
  }
}
