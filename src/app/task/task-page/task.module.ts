import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from '../store';
import { TaskContainerModule } from '../task-container/task-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    TaskContainerModule,
    StoreModule.forFeature('tasksState', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [TaskPage],
})
export class TaskPageModule {}
