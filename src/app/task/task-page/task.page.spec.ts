import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TaskPage } from './task.page';

describe('TaskPage', () => {
  let component: TaskPage;
  let fixture: ComponentFixture<TaskPage>;
  let store: MockStore;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TaskPage],
        imports: [IonicModule.forRoot(), StoreModule.forRoot({})],
        providers: [provideMockStore({})],
      }).compileComponents();

      store = TestBed.inject(MockStore);
      fixture = TestBed.createComponent(TaskPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
