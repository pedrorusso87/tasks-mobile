export class AddTaskRequest {
  responsible: string;
  createdBy: string;
  description: string;
  status: string;
  priority: string;
  dueDate?: Date;
  createdDate: Date;
}
