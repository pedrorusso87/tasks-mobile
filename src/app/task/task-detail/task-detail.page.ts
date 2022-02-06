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

const ARROW_UP_ICON = 'arrow-up';
const ARROW_DOWN_ICON = 'arrow-down';
const ARROW_MEDIUM_ICON = 'arrow-forward';
const ARROW_DEFAULT_ICON = 'remove-circle';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  getPriorities$ = this.store.select(fromPriorities.selectGetPriorities);

  createdDate: string;
  dueDate: string;
  owner: string;
  description: string;
  pending = true;
  status: string;
  taskId: string;
  priority: string;
  today = moment().format('YYYY-MM-DD');
  updateForm = new FormGroup({});
  priorities;
  currentPriority;
  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private store: Store,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getPriorities$.subscribe((priorities) => {
      if (priorities) {
        this.priorities = priorities;
      }
    });
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
    this.priority = this.route.snapshot.queryParamMap.get('priority');
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
    switch (this.priority) {
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
