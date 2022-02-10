export class UserDashboardsResponse {
  dashboards: DashboardInformation[];
}

export class DashboardInformation {
  name: string;
  createdDate: string;
  modifiedDate: string;
}
