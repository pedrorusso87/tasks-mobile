import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddTaskPage } from './add-task-page/add-task.page';
import TaskEffects from './store/effects/task-effects';
import TaskStatusEffects from './store/effects/task-status-effects';
import * as fromTask from './store/reducers';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TaskDetailPage } from './task-detail/task-detail.page';
import { TaskPage } from './task-page/task.page';
@NgModule({
  declarations: [AddTaskPage, TaskContainerComponent, TaskDetailPage, TaskPage],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    StoreModule.forFeature('tasks', fromTask.reducers),
    EffectsModule.forFeature([TaskEffects, TaskStatusEffects]),
  ],
})
export class TaskModule {}
