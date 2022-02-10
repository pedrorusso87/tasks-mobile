import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardHomePageRoutingModule } from './dashboard-home/dashboard-home-routing.module';
import { DashboardHomePage } from './dashboard-home/dashboard-home.page';
import DashboardEffects from './store/effects/dashboard-effects';
import * as fromDashboard from './store/reducers';
@NgModule({
  declarations: [DashboardHomePage, DashboardContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    DashboardHomePageRoutingModule,
    StoreModule.forFeature('dashboard', fromDashboard.reducers),
    EffectsModule.forFeature([DashboardEffects]),
  ],
})
export class DashboardModule {}
