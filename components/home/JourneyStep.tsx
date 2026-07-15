import { JourneyStatus } from "@/types/journey";

interface JourneyStepProps {
  title: string;
  status: JourneyStatus;
}

export default function JourneyStep({
  title,
  status,
}: JourneyStepProps) {
  const isCompleted = status === "Completed";
  const isCurrent = status === "In Progress";

  const icon = isCompleted
    ? "✓"
    : isCurrent
    ? "◐"
    : "○";

  return (
    <div className="flex items-start gap-4 py-3">

      <div className="flex flex-col items-center">

        <span
          className={`text-xl ${
            isCompleted
              ? "text-green-600"
              : isCurrent
              ? "text-blue-600"
              : "text-slate-400"
          }`}
        >
          {icon}
        </span>

        <div className="mt-1 h-8 w-px bg-slate-200" />

      </div>

      <div>

        <p
          className={`font-medium ${
            isCurrent ? "text-blue-700" : ""
          }`}
        >
          {title}
        </p>

        <p className="text-sm text-slate-500">
          {status}
        </p>

      </div>

    </div>
  );
}