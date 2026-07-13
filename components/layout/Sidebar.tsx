import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "🏠 Dashboard" },
  { href: "/homes", label: "🏡 Homes" },
  { href: "/neighborhoods", label: "📍 Neighborhoods" },
  { href: "/final-four", label: "⭐ Final Four" },
  { href: "/decision-room", label: "⚖️ Decision Room" },
  { href: "/settings", label: "⚙️ Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-slate-50 p-6">
      <h1 className="mb-8 text-2xl font-bold">
        🏠 Home Compass
      </h1>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 transition hover:bg-slate-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}