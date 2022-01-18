import { Task } from 'src/app/services/task-service';

export class HomeState {
  pending: boolean;
  error: null;
  tasks: Task[];
}
