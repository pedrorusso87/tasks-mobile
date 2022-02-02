import { Task } from 'src/app/services/task-service';

export class TaskState {
  pending: {
    getTasks: boolean;
    addTask: boolean;
    deleteTask: boolean;
  };
  error: null;
  tasks: Task[];
}
