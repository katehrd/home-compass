export type TaskStatus =
  | "Not Started"
  | "In Progress"
  | "Waiting"
  | "Completed";

export type TaskPriority =
  | "Low"
  | "Medium"
  | "High";

export interface Task {
  
  id: string;

  homeId: string;

  title: string;

  stepId: string;

  status: TaskStatus;

  dueDate?: Date;

  owner: string;

  priority: TaskPriority;

  notes: string;

  completedDate?: Date;

}