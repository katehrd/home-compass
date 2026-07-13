import { homes } from "@/data/homes";
import StatusBadge from "@/components/shared/StatusBadge";

export default async function HomeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const home = homes.find((home) => home.id === id);

  if (!home) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">
          Home not found
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          {home.address}
        </h1>

        <StatusBadge status={home.status} />
      </div>

      <div className="mt-4 flex items-center justify-between">

  <p className="text-xl text-slate-600">
    {home.neighborhood}
  </p>

  <p className="text-xl font-semibold">
    ⭐ {home.score}
  </p>

</div>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
  🎯 Today's Priority
</h2>

        <p className="mt-3 text-slate-600">
          {home.nextAction ?? "No action required."}
        </p>
      </div>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold">
    Home Overview
  </h2>

  <div className="mt-6 grid grid-cols-2 gap-6">

    <div>
      <p className="text-sm text-slate-500">Price</p>
      <p className="text-lg font-medium">
        ${home.price.toLocaleString()}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">Score</p>
      <p className="text-lg font-medium">
        ⭐ {home.score}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">Bedrooms</p>
      <p className="text-lg font-medium">
        {home.bedrooms}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">Bathrooms</p>
      <p className="text-lg font-medium">
        {home.bathrooms}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">Square Feet</p>
      <p className="text-lg font-medium">
        {home.squareFeet.toLocaleString()}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">Neighborhood</p>
      <p className="text-lg font-medium">
        {home.neighborhood}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">Middle School</p>
      <p className="text-lg font-medium">
        {home.middleSchool}
      </p>
    </div>

    <div>
  <p className="text-sm text-slate-500">Status</p>
  <StatusBadge status={home.status} />
</div>

  </div>
</div>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Home Journey
        </h2>

        <p className="mt-3 text-slate-500">
          Coming in Sprint 4...
        </p>
      </div>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Notes
        </h2>

        <p className="mt-3 text-slate-500">
          Coming soon...
        </p>
      </div>
    </main>
  );
}