import { Task } from "@/types/task";
import TaskStatusSelect from "./TaskStatusSelect";

interface TaskCardProps {
  task: Task;
  onStatusChange: (status: Task["status"]) => void;
}

export default function TaskCard({
  task,
  onStatusChange,
}: TaskCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center gap-2">
        {task.priority === "High" && (
          <span>🔥</span>
        )}

        <h3 className="font-semibold">
          {task.title}
        </h3>
      </div>

      {task.notes && (
        <p className="mt-2 text-slate-600">
          {task.notes}
        </p>
      )}

      <div className="mt-4 text-sm text-slate-500 space-y-1">
        <p>Owner: {task.owner}</p>

        {task.dueDate && (
          <p>
            Due: {task.dueDate.toLocaleDateString()}
          </p>
        )}

        <p>Priority: {task.priority}</p>
      </div>

      <div className="mt-4">
        <TaskStatusSelect
          value={task.status}
          onChange={onStatusChange}
        />
      </div>
    </div>
  );
}