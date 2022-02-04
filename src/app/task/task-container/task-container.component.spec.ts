import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskContainerComponent } from './task-container.component';
import { MockStore } from '@ngrx/store/testing';
import * as fromPriorities from 'src/app/task/store/reducers';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('TaskContainerComponent', () => {
  let component: TaskContainerComponent;
  let fixture: ComponentFixture<TaskContainerComponent>;
  let spectator: Spectator<TaskContainerComponent>;
  let mockStore: MockStore<fromPriorities.State>;

  const createComponent = createComponentFactory({
    component: TaskContainerComponent,
    declarations: [TaskContainerComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
    mockStore = spectator.inject(MockStore);
    fixture = TestBed.createComponent(TaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
