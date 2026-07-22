"use client";

import { useTasks } from "@/context/TaskContext";
import TaskCard from "@/components/tasks/TaskCard";

interface HomeTasksPanelProps {
  homeId: string;
}

export default function HomeTasksPanel({
  homeId,
}: HomeTasksPanelProps) {
  const { tasks, updateTaskStatus } = useTasks();

  const homeTasks = tasks.filter(
  (task) => task.homeId === homeId
);

return (
  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <h2 className="text-xl font-semibold">
      Tasks
    </h2>

    {homeTasks.length > 0 ? (
  <div className="mt-4 space-y-4">
  {homeTasks.map((task) => (
    <TaskCard
      key={task.id}
      task={task}
      onStatusChange={(status) =>
        updateTaskStatus(task.id, status)
      }
    />
  ))}
</div>
) : (
  <p className="mt-3 text-slate-500">
    No tasks yet.
  </p>
)}
  </div>
);
}