import { tasks } from "@/data/tasks";
import ActionCard from "./ActionCard";
import { homes } from "@/data/homes";

export default function TodaysPriorities() {
  const priorities = tasks.filter(
  (task) =>
    task.priority === "High" &&
    task.status !== "Completed"
);

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-bold">
        Today's Priorities
      </h2>

      <p className="mb-6 text-slate-600">
  You have {priorities.length} priorities today.
</p>

      <div className="grid gap-4 md:grid-cols-2">
        {priorities.map((task) => {
  const home = homes.find(
    (home) => home.id === task.homeId
  );

  if (!home) return null;

  return (
    <ActionCard
      key={task.id}
      home={home}
      task={task}
    />
  );
})}
      </div>
    </section>
  );
}