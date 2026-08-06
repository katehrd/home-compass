import { Task } from "@/types/task";
import TaskStatusSelect from "./TaskStatusSelect";
import {
  getUrgency,
  getUrgencyColorClass,
} from "@/lib/taskUtils";

interface TaskCardProps {
  task: Task;
  onStatusChange: (status: Task["status"]) => void;
}

export default function TaskCard({
  task,
  onStatusChange,
}: TaskCardProps) {

  const urgency = getUrgency(task);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
  Next Action
</p>

<p
  className={`mt-1 text-sm font-semibold ${getUrgencyColorClass(
    urgency.color
  )}`}
>
  {urgency.label}
</p>

  <h3 className="mt-3 text-xl font-semibold">
    {task.title}
  </h3>

  <div className="mt-3">
    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
      {task.priority} Priority
    </span>
  </div>

  <div className="mt-5 space-y-2 text-sm text-slate-600">

    {task.dueDate && (
      <p>
        📅 {task.dueDate.toLocaleDateString()}
      </p>
    )}

    <p>
      👤 {task.owner}
    </p>

  </div>

      <div className="mt-6">

  <p className="mb-2 text-sm font-medium text-slate-700">
    Status
  </p>

  <TaskStatusSelect
    value={task.status}
    onChange={onStatusChange}
  />

  {task.notes && (
  <div className="mt-6 border-t pt-4">
    <p className="text-sm text-slate-600">
      {task.notes}
    </p>
  </div>
)}
</div>
    </div>
  );
}