import Link from "next/link";
import StatusBadge from "@/components/shared/StatusBadge";
import { Property } from "@/types/property";

interface HomeCardProps {
  home: Property;
}

export default function HomeCard({ home }: HomeCardProps) {
  return (
    <Link href={`/homes/${home.id}`}>
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <StatusBadge status={home.status} />
      <h2 className="text-xl font-semibold">
        {home.address}
      </h2>

      <p className="mt-2 text-slate-600">
        {home.neighborhood}
      </p>

      <div className="mt-6 flex justify-between text-sm">
        <span>${home.price.toLocaleString()}</span>

        <span>⭐ {home.score}</span>
      </div>
    </div>
    </Link>
  );
}