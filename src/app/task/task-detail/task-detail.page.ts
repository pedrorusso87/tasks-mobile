import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import * as fromTasks from '../store';
import { TaskActions } from '../store/actions';

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
  status: string;
  taskId: string;

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private store: Store
  ) {}

  ngOnInit() {
    this.createdDate = this.route.snapshot.queryParamMap.get('createdDate');
    this.description = this.route.snapshot.queryParamMap.get('description');
    this.dueDate = this.route.snapshot.queryParamMap.get('dueDate');
    this.owner = this.route.snapshot.queryParamMap.get('owner');
    this.status = this.route.snapshot.queryParamMap.get('status');
    this.taskId = this.route.snapshot.queryParamMap.get('taskId');
    this.pending = false;
  }

  async deleteTask() {
    const alert = await this.alertController.create({
      message: '¿Está seguro de querer eliminar esta tarea?',
      buttons: [
        {
          text: 'Volver',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
        },
        {
          text: 'Eliminar',
          id: 'delete-button',
          handler: () => {
            // TODO: This is just a test, in the future we might not want to pass the id of the task
            this.store.dispatch(
              TaskActions.DeleteTask({ payload: this.taskId })
            );
          },
        },
      ],
    });
    await alert.present();
  }
}
