import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskPage } from '../add-task-page/add-task.page';
import { TaskDetailPage } from '../task-detail/task-detail.page';

import { TaskPage } from './task.page';

const routes: Routes = [
  {
    path: '',
    component: TaskPage,
  },
  {
    path: 'task-detail',
    component: TaskDetailPage,
  },
  {
    path: 'new-task',
    component: AddTaskPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPageRoutingModule {}
