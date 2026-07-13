import HomeCard from "@/components/home/HomeCard";
import { homes } from "@/data/homes";

export default function HomesPage() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">
        Homes
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {homes.map((home) => (
          <HomeCard
            key={home.id}
            home={home}
          />
        ))}
      </div>
    </div>
  );
}