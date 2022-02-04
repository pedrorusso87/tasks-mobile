import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockStore } from '@ngrx/store/testing';
import * as fromTasks from 'src/app/task/store/reducers';
import { TaskDetailPage } from './task-detail.page';

describe('TaskDetailPage', () => {
  let component: TaskDetailPage;
  let fixture: ComponentFixture<TaskDetailPage>;
  let spectator: Spectator<TaskDetailPage>;
  let mockStore: MockStore<fromTasks.State>;

  const createComponent = createComponentFactory({
    component: TaskDetailPage,
    declarations: [TaskDetailPage],
  });

  beforeEach(() => {
    spectator = createComponent();
    mockStore = spectator.inject(MockStore);
    fixture = TestBed.createComponent(TaskDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
