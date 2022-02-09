import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardHomePageRoutingModule } from './dashboard-home/dashboard-home-routing.module';
import { DashboardHomePage } from './dashboard-home/dashboard-home.page';

@NgModule({
  declarations: [DashboardHomePage, DashboardContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    DashboardHomePageRoutingModule,
  ],
})
export class DashboardModule {}
