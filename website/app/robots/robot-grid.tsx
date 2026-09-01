"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  KIND_LABELS,
  PATHON_MAKER,
  type Robot,
  type RobotKind,
} from "@/lib/robot-types";

const KIND_TABS: { value: RobotKind | ""; label: string }[] = [
  { value: "", label: "All" },
  { value: "robot", label: "Robots" },
  { value: "end_effector", label: "End Effectors" },
  { value: "part", label: "Mounts & Adapters" },
  { value: "equipment", label: "Equipment" },
];

/**
 * Reads the deep-link params the homepage category tiles use, e.g.
 * /robots?kind=part&category=Sensor%20Mount. Rendered inside a Suspense boundary
 * whose fallback is the unfiltered grid, so the page still prerenders statically
 * with every card in the HTML.
 */
export function FilteredRobotGrid({ robots }: { robots: Robot[] }) {
  const params = useSearchParams();
  const kind = params.get("kind");
  const category = params.get("category") ?? "";
  const initialKind: RobotKind | "" =
    kind && kind in KIND_LABELS ? (kind as RobotKind) : "";
  const initialCategory = robots.some(
    (r) => r.category === category && (!initialKind || r.kind === initialKind),
  )
    ? category
    : "";

  return (
    <RobotGrid
      robots={robots}
      initialKind={initialKind}
      initialCategory={initialCategory}
    />
  );
}

export function RobotGrid({
  robots,
  initialKind = "",
  initialCategory = "",
}: {
  robots: Robot[];
  initialKind?: RobotKind | "";
  initialCategory?: string;
}) {
  const [activeKind, setActiveKind] = useState<RobotKind | "">(initialKind);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activePurpose, setActivePurpose] = useState<string | null>(null);
  const [pathonOnly, setPathonOnly] = useState(false);

  // Categories and purposes follow the selected kind, so the dropdown never
  // offers a filter that yields nothing.
  const inKind = robots.filter((r) => !activeKind || r.kind === activeKind);
  const categories = [...new Set(inKind.map((r) => r.category))].sort();
  const purposes = [...new Set(inKind.flatMap((r) => r.purpose))];

  const filtered = inKind.filter((r) => {
    if (activeCategory && r.category !== activeCategory) return false;
    if (activePurpose && !r.purpose.includes(activePurpose)) return false;
    if (pathonOnly && r.maker !== PATHON_MAKER) return false;
    return true;
  });

  function selectKind(kind: RobotKind | "") {
    setActiveKind(kind);
    setActiveCategory("");
    setActivePurpose(null);
  }

  return (
    <div>
      {/* Kind tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {KIND_TABS.map((tab) => (
          <button
            key={tab.value || "all"}
            onClick={() => selectKind(tab.value)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
              activeKind === tab.value
                ? "bg-green-600 border-green-600 text-white"
                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.label} (
            {robots.filter((r) => !tab.value || r.kind === tab.value).length})
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {/* Category dropdown */}
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="h-9 px-3 pr-8 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_8px_center] bg-no-repeat cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1"
        >
          <option value="">All Types ({inKind.length})</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat} ({inKind.filter((r) => r.category === cat).length})
            </option>
          ))}
        </select>

        {/* Divider */}
        <div className="h-5 w-px bg-gray-200" />

        {/* Purpose pills */}
        <button
          onClick={() => setActivePurpose(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activePurpose === null
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {purposes.map((p) => (
          <button
            key={p}
            onClick={() => setActivePurpose(p)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activePurpose === p
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {p}
          </button>
        ))}

        {/* Divider */}
        <div className="h-5 w-px bg-gray-200" />

        <button
          onClick={() => setPathonOnly((v) => !v)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            pathonOnly
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Built by PathOn
        </button>
      </div>

      {/* Result count */}
      <p className="text-sm text-gray-400 mb-4">
        Showing {filtered.length} of {robots.length} entries
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((robot) => (
          <Link
            key={robot.slug}
            href={`/robots/${robot.slug}`}
            className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
              <img
                src={robot.image}
                alt={robot.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {robot.maker === PATHON_MAKER && (
                <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 bg-green-600 text-white rounded-full">
                  PathOn Robotics
                </span>
              )}
              <span className="absolute top-2 right-2 text-xs font-medium px-2 py-1 bg-white/90 text-gray-700 rounded-full">
                {KIND_LABELS[robot.kind]}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold group-hover:text-green-600 transition-colors">
                  {robot.name}
                </h3>
                <span className="shrink-0 text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                  {robot.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {robot.description}
              </p>
              {robot.purpose.length > 0 && (
                <div className="flex gap-1.5 mt-3">
                  {robot.purpose.map((p) => (
                    <span
                      key={p}
                      className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
