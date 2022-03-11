export class AddTaskRequest {
  responsible: string;
  createdBy: string;
  description: string;
  status: string;
  priority: string;
  dueDate?: Date;
  createdDate: Date;
}

export class TaskDetailsParams {
  createdDate: Date;
  description: string;
  dueDate: Date;
  owner: string;
  status: string;
  taskId: string;
  priority: string;
  dashboardName: string;
}
