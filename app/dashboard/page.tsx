import { tasks } from "@/data/tasks";
import TodaysPriorities from "@/components/dashboard/TodaysPriorities";
import StatCard from "@/components/dashboard/StatCard";
import { homes } from "@/data/homes";

export default function DashboardPage() {
  const homesReviewed = homes.length;

  const finalFour = homes.filter(
    (home) => home.status === "Final Four"
  ).length;

  const bestHome = [...homes].sort(
    (a, b) => b.score - a.score
  )[0];

  const averageScore =
    homes.reduce(
      (sum, home) => sum + home.score,
      0
    ) / homesReviewed;

  const priorityTasks = tasks.filter(
  (task) =>
    task.priority === "High" &&
    task.status !== "Completed"
);

  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">
        Dashboard
      </h1>

      <TodaysPriorities />

<div className="mt-10">
  {/* your existing stat cards */}
</div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Homes Reviewed"
          value={homesReviewed}
        />

        <StatCard
          title="Final Four"
          value={finalFour}
        />

        <StatCard
          title="Best Home"
          value={bestHome.address}
        />

        <StatCard
          title="Average Score"
          value={averageScore.toFixed(1)}
        />
      </div>
    </div>
  );
}