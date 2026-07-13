import StatusBadge from "@/components/shared/StatusBadge";
import { Property } from "@/types/property";

interface ActionCardProps {
  home: Property;
}

export default function ActionCard({ home }: ActionCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-red-600">
        {home.nextAction}
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {home.address}
      </h3>

      <div className="mt-3">
        <StatusBadge status={home.status} />
      </div>
    </div>
  );
}