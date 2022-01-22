import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {

  createdDate: string;
  dueDate: string;
  owner: string;
  description: string;
  pending = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.createdDate = (this.route.snapshot.queryParamMap.get('createdDate'));
    this.description = (this.route.snapshot.queryParamMap.get('description'));
    this.dueDate = (this.route.snapshot.queryParamMap.get('dueDate'));
    this.owner = (this.route.snapshot.queryParamMap.get('owner'));
    this.pending = false;
  }

}
