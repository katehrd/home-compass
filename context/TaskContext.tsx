"use client";

import { createContext } from "react";
import { Task, TaskStatus } from "@/types/task";

interface TaskContextValue {
  tasks: Task[];
  updateTaskStatus: (
    taskId: string,
    status: TaskStatus
  ) => void;
}

export const TaskContext =
  createContext<TaskContextValue | null>(null);

  import { useState, ReactNode } from "react";
import { tasks as initialTasks } from "@/data/tasks";

interface TaskProviderProps {
  children: ReactNode;
}
export function TaskProvider({
  children,
}: TaskProviderProps) {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        updateTaskStatus: (
  taskId,
  status
) => {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status,
          }
        : task
    )
  );
},
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

import { useContext } from "react";

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTasks must be used within a TaskProvider"
    );
  }

  return context;
}