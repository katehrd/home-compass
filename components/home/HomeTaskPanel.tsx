"use client";

import { useTasks } from "@/context/TaskContext";
import TaskStatusSelect from "@/components/tasks/TaskStatusSelect";

interface HomeTaskPanelProps {
  homeId: string;
}

export default function HomeTaskPanel({
  homeId,
}: HomeTaskPanelProps) {
  const { tasks, updateTaskStatus } = useTasks();

  const homeTasks = tasks.filter(
  (task) => task.homeId === homeId
);

const highPriorityTask = homeTasks.find(
  (task) =>
    task.priority === "High" &&
    task.status !== "Completed"
);

return (
  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <h2 className="text-xl font-semibold">
      🔥 High Priority
    </h2>

    {highPriorityTask ? (
      <>
        <p className="mt-3 text-lg font-medium">
          {highPriorityTask.title}
        </p>

        <p className="mt-2 text-slate-600">
          {highPriorityTask.notes}
        </p>

        <div className="mt-4 text-sm text-slate-500">
          <p>Owner: {highPriorityTask.owner}</p>

          {highPriorityTask.dueDate && (
            <p>
              Due: {highPriorityTask.dueDate.toLocaleDateString()}
            </p>
          )}
        </div>
<div className="mt-4">
  <TaskStatusSelect
    value={highPriorityTask.status}
    onChange={(status) =>
      updateTaskStatus(highPriorityTask.id, status)
    }
  />
</div>
      </>
    ) : (
      <p className="mt-3 text-slate-500">
        No high priority tasks.
      </p>
    )}
  </div>
);
}