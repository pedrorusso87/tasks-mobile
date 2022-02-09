import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
})
export class DashboardContainerComponent implements OnInit {
  @Input() dashboardList = ['1', '2', '3'];

  constructor() {}

  ngOnInit() {}
}
