import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockStore } from '@ngrx/store/testing';
import * as fromTasks from 'src/app/task/store/reducers';
import { AddTaskPage } from './add-task.page';

describe('AddTaskPage', () => {
  let component: AddTaskPage;
  let fixture: ComponentFixture<AddTaskPage>;
  let spectator: Spectator<AddTaskPage>;
  let mockStore: MockStore<fromTasks.State>;

  const createComponent = createComponentFactory({
    component: AddTaskPage,
    declarations: [AddTaskPage],
  });

  beforeEach(() => {
    spectator = createComponent();
    mockStore = spectator.inject(MockStore);
    fixture = TestBed.createComponent(AddTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
