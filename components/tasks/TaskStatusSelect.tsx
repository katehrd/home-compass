"use client";
import { TaskStatus } from "@/types/task";

interface TaskStatusSelectProps {
  value: TaskStatus;
  onChange: (status: TaskStatus) => void;
}

const statuses: TaskStatus[] = [
  "Not Started",
  "In Progress",
  "Waiting",
  "Completed",
];

export default function TaskStatusSelect({
  value,
  onChange,
}: TaskStatusSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value as TaskStatus)
      }
      className="rounded-md border px-3 py-2"
    >
      {statuses.map((status) => (
        <option
          key={status}
          value={status}
        >
          {status}
        </option>
      ))}
    </select>
  );
}