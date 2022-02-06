import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
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
  today = moment().format('YYYY-MM-DD');
  updateForm = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private store: Store,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadTaksData();
    this.initUpdateForm();
    this.pending = false;
  }

  loadTaksData() {
    this.createdDate = this.route.snapshot.queryParamMap.get('createdDate');
    this.description = this.route.snapshot.queryParamMap.get('description');
    this.dueDate = this.route.snapshot.queryParamMap.get('dueDate');
    this.owner = this.route.snapshot.queryParamMap.get('owner');
    this.status = this.route.snapshot.queryParamMap.get('status');
    this.taskId = this.route.snapshot.queryParamMap.get('taskId');
  }

  initUpdateForm() {
    this.updateForm = this.formBuilder.group({
      dueDate: [this.dueDate, Validators.required],
      responsible: [''],
      status: [''],
      priority: [''],
      description: [this.description, Validators.required],
    });
  }

  dateSelected(datetime) {
    this.updateForm.get('dueDate').setValue(datetime);
    console.log(this.updateForm.get('dueDate'));
  }

  getFormattedDueDate() {
    return moment(this.getDueDate(), 'YYYY-MM-DD').format('YYYY-MM-DD');
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

  getPlaceholderText(controlName: string) {
    return this.updateForm.get(controlName).errors?.required
      ? 'Campo Requerido'
      : null;
  }

  getDescription(): string {
    return this.updateForm.get('description').value;
  }
  getDueDate(): string {
    return this.updateForm.get('dueDate').value;
  }
  getResponsible(): string {
    return this.updateForm.get('responsible').value;
  }
  getStatus(): string {
    return this.updateForm.get('status').value;
  }
  getPriority(): string {
    return this.updateForm.get('priority').value;
  }
}
