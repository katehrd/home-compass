export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-8 py-20">

        <h1 className="text-6xl font-bold tracking-tight">
          🏡 Home Compass
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-600">
          Helping families make smarter home-buying decisions.
        </p>

        <div className="mt-12 rounded-2xl bg-white p-10 shadow">

          <h2 className="text-2xl font-semibold">
            Welcome
          </h2>

          <p className="mt-4 text-slate-600">
            This application helps compare homes,
            evaluate neighborhoods,
            calculate affordability,
            and make confident buying decisions.
          </p>

          <button className="mt-8 rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-700">
            Enter Dashboard
          </button>

        </div>

      </div>
    </main>
  );
}