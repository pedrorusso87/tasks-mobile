import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';

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
            console.log('Confirm Okay');
          },
        },
      ],
    });
    await alert.present();
  }
}
