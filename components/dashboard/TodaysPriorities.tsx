import ActionCard from "./ActionCard";
import { homes } from "@/data/homes";

export default function TodaysPriorities() {
  const priorities = homes.filter(
    (home) => home.nextAction
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
        {priorities.map((home) => (
          <ActionCard
            key={home.id}
            home={home}
          />
        ))}
      </div>
    </section>
  );
}