import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () =>
      import('./task/task-page/task.module').then((m) => m.TaskPageModule),
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'task-detail',
    loadChildren: () =>
      import('./task/task-detail/task-detail.module').then(
        (m) => m.TaskDetailPageModule
      ),
  },
  {
    path: 'task',
    loadChildren: () =>
      import('./task/task-page/task.module').then((m) => m.TaskPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
