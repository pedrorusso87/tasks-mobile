import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardActions } from '../store/actions';
import * as fromDashboards from '../store';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.page.html',
  styleUrls: ['./dashboard-home.page.scss'],
})
export class DashboardHomePage implements OnInit {
  getUserDashboards$ = this.store.select(fromDashboards.selectUserDashboards);
  getUserDashboardsPending$ = this.store.select(
    fromDashboards.selectUserDashboardsPending
  );
  constructor(private store: Store) {}

  ngOnInit() {
    const userId = '6';
    this.store.dispatch(DashboardActions.getUserDashboards({ userId }));
    this.getUserDashboardsPending$.subscribe((pending) => {
      console.log(pending);
    });
  }
}
