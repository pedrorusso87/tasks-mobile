import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockStore } from '@ngrx/store/testing';
import { TaskPage } from './task.page';
import * as fromTasks from 'src/app/task/store/reducers';

describe('TaskPage', () => {
  let component: TaskPage;
  let fixture: ComponentFixture<TaskPage>;
  let spectator: Spectator<TaskPage>;
  let mockStore: MockStore<fromTasks.State>;

  const createComponent = createComponentFactory({
    component: TaskPage,
    declarations: [TaskPage],
  });

  beforeEach(() => {
    spectator = createComponent();
    mockStore = spectator.inject(MockStore);
    fixture = TestBed.createComponent(TaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
