import JourneyStep from "./JourneyStep";
import { defaultJourney } from "@/data/journey";

export default function HomeJourney() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        🧭 Home Journey
      </h2>

      <div className="mt-6">
        {defaultJourney.map((step) => (
          <JourneyStep
            key={step.id}
            title={step.title}
            status={step.status}
          />
        ))}
      </div>
    </div>
  );
}