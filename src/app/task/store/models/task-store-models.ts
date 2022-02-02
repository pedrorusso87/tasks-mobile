import { Task } from 'src/app/services/task-service';

export class TaskState {
  pending: {
    getTasks: boolean;
    addTask: boolean;
  };
  error: null;
  tasks: Task[];
}
