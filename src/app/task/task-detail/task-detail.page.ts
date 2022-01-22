import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('adasdsad');
    const task = (this.route.snapshot.queryParamMap.get('createdDate'));
    console.log(task);
  }

}
