import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardActions } from '../store/actions';
import * as fromDashboards from '../store';
import { Subscription } from 'rxjs';
import {
  DashboardInformation,
  UserDashboardsResponse,
} from '../models/dashboard-model';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.page.html',
  styleUrls: ['./dashboard-home.page.scss'],
})
export class DashboardHomePage implements OnInit, OnDestroy {
  getUserDashboards$ = this.store.select(fromDashboards.selectUserDashboards);
  getUserDashboardsSubscription: Subscription;
  getUserDashboardsPending$ = this.store.select(
    fromDashboards.selectUserDashboardsPending
  );
  userDashboards: DashboardInformation[];
  constructor(private store: Store) {}

  ngOnInit() {
    const username = 'user';
    this.store.dispatch(DashboardActions.getUserDashboards({ username }));
    this.getUserDashboardsSubscription = this.getUserDashboards$.subscribe(
      (dashboardsResponse) => {
        if (dashboardsResponse) {
          this.userDashboards = dashboardsResponse.dashboards;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.getUserDashboardsSubscription.unsubscribe();
  }
}
