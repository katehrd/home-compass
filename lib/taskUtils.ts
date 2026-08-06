import { Task } from "@/types/task";

export interface Urgency {
  level:
    | "overdue"
    | "today"
    | "tomorrow"
    | "thisWeek"
    | "future"
    | "none";

  label: string;

  color:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "gray";
}

export function getUrgency(
  task: Task
): Urgency {
  if (!task.dueDate) {
    return {
      level: "none",
      label: "No Due Date",
      color: "gray",
    };
  }

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const due = new Date(task.dueDate);

  due.setHours(0, 0, 0, 0);

  const diffInDays = Math.round(
    (due.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (diffInDays < 0) {
    return {
      level: "overdue",
      label: `Overdue by ${Math.abs(diffInDays)} day${
        Math.abs(diffInDays) === 1 ? "" : "s"
      }`,
      color: "red",
    };
  }

  if (diffInDays === 0) {
    return {
      level: "today",
      label: "Due Today",
      color: "orange",
    };
  }

  if (diffInDays === 1) {
    return {
      level: "tomorrow",
      label: "Due Tomorrow",
      color: "yellow",
    };
  }

  if (diffInDays <= 7) {
    return {
      level: "thisWeek",
      label: `Due in ${diffInDays} days`,
      color: "green",
    };
  }

  return {
    level: "future",
    label: `Due ${due.toLocaleDateString()}`,
    color: "blue",
  };
}

export function getUrgencyColorClass(
  color: Urgency["color"]
) {
  switch (color) {
    case "red":
      return "text-red-600";

    case "orange":
      return "text-orange-600";

    case "yellow":
      return "text-amber-600";

    case "green":
      return "text-green-600";

    case "blue":
      return "text-blue-600";

    default:
      return "text-slate-500";
  }
}