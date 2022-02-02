import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskContainerComponent } from './task-container.component';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

fdescribe('TaskContainerComponent', () => {
  let component: TaskContainerComponent;
  let fixture: ComponentFixture<TaskContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TaskContainerComponent],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          StoreModule.forRoot({}),
        ],
        providers: [provideMockStore()],
      }).compileComponents();

      fixture = TestBed.createComponent(TaskContainerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
