import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TaskContainerComponent } from './task-container.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [TaskContainerComponent],
  exports: [TaskContainerComponent],
})
export class TaskContainerModule {}
