import { Task } from 'src/app/services/task-service';

export class TaskState {
  pending: boolean;
  error: null;
  tasks: Task[];
}
