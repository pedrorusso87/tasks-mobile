import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddTaskPage } from './task/add-task-page/add-task.page';
import { TaskDetailPage } from './task/task-detail/task-detail.page';
import { TaskPage } from './task/task-page/task.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
