import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { effects, reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TaskContainerModule } from '../task/task-container/task-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskContainerModule,
    HomePageRoutingModule,
    StoreModule.forFeature('tasks', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
