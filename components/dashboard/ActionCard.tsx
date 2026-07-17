"use client";
import StatusBadge from "@/components/shared/StatusBadge";
import { Property } from "@/types/property";
import { Task } from "@/types/task";
import TaskStatusSelect from "@/components/tasks/TaskStatusSelect";

interface ActionCardProps {
  home: Property;
  task: Task;
  onStatusChange: (status: Task["status"]) => void;
}

export default function ActionCard({
  home,
  task,
  onStatusChange,
}: ActionCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-red-600">
        {task.title}
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {home.address}
      </h3>

      <div className="mt-3">
  <TaskStatusSelect
  value={task.status}
  onChange={onStatusChange}
/>
</div>
    </div>
  );
}