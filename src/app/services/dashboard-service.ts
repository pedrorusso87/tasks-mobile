import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private url = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  public getUserDashboards(userId: string): Observable<any> {
    return this.httpClient.get(`${this.url}/dashboards/user/${userId}`);
  }
}
