import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { TaskActions } from '../store/actions';
import * as fromPriorities from '../../priorities/store';
import * as fromTaskStatus from '../../task/store';
import { TaskDetailsParams } from '../models/task-model';

const ARROW_UP_ICON = 'arrow-up';
const ARROW_DOWN_ICON = 'arrow-down';
const ARROW_MEDIUM_ICON = 'arrow-forward';
const ARROW_DEFAULT_ICON = 'remove-circle';

const STAR = 'star';
const STAR_HALF = 'star-half';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  getPriorities$ = this.store.select(fromPriorities.selectGetPriorities);
  getTaskStatuses$ = this.store.select(fromTaskStatus.selectGetTasksStatus);
  params;
  pending = true;
  today = moment().format('YYYY-MM-DD');
  updateForm = new FormGroup({});
  taskDetails = {} as TaskDetailsParams;
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
    this.params = this.route.snapshot.queryParamMap;
    const {
      createdDate,
      description,
      dueDate,
      owner,
      status,
      taskId,
      priority,
    } = this.params.params;
    this.taskDetails.description = description;
    this.taskDetails.createdDate = createdDate;
    this.taskDetails.dueDate = dueDate;
    this.taskDetails.owner = owner;
    this.taskDetails.status = status;
    this.taskDetails.taskId = taskId;
    this.taskDetails.priority = priority;
  }

  initUpdateForm() {
    this.updateForm = this.formBuilder.group({
      dueDate: [this.taskDetails.dueDate, Validators.required],
      responsible: [''],
      status: [this.taskDetails.status],
      priority: [''],
      description: [this.taskDetails.description, Validators.required],
    });
  }

  dateSelected(datetime) {
    this.updateForm.get('dueDate').setValue(datetime);
  }

  getFormattedDueDate() {
    return moment(this.getDueDate(), 'YYYY-MM-DD').format('YYYY-MM-DD');
  }

  getIconColor(controlName: string): string {
    const control: FormControl = this.updateForm.get(
      controlName
    ) as FormControl;
    return control && control.errors ? 'medium' : 'primary';
  }

  disableModify(): boolean {
    return !this.updateForm.dirty || !this.updateForm.valid;
  }

  getPriorityIconName(): string {
    switch (this.taskDetails.priority) {
      case 'ALTA':
        return ARROW_UP_ICON;
      case 'MEDIA':
        return ARROW_MEDIUM_ICON;
      case 'BAJA':
        return ARROW_DOWN_ICON;
      default:
        return ARROW_DEFAULT_ICON;
    }
  }

  getStatusIconName(): string {
    return this.taskDetails.status === 'PENDIENTE' ? STAR_HALF : STAR;
  }

  getTaskStatusIconColor(): string {
    return this.taskDetails.status === 'CANCELADA' ? 'danger' : 'primary';
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
              TaskActions.DeleteTask({ payload: this.taskDetails.taskId })
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
