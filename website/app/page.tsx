import Link from "next/link";
import { getAllRobots, getCategories, isPathon, KIND_LABELS } from "@/lib/robots";
import { TOOLS } from "./software/tools-data";
import { PROJECTS } from "./software/projects-data";

export default function Home() {
  const entries = getAllRobots();
  const robots = entries.filter((r) => r.kind === "robot");
  const ours = entries.filter(isPathon);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Open Source Robotics Lab
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Open hardware we design — robots, dexterous hands, grippers, and
            sensor mounts — plus a curated map of the low-cost platforms we build
            on. By{" "}
            <a
              href="https://www.pathon.ai"
              className="text-green-600 hover:underline"
            >
              Pathon Robotics
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/robots"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Explore Robots &amp; Parts
            </Link>
            <a
              href="https://github.com/PathOn-AI/pathon_opensource"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600">{robots.length}</div>
            <div className="text-sm text-gray-500 mt-1">Robots</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">
              {getCategories(robots).length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-sm text-gray-500 mt-1">Open Source</div>
          </div>
        </div>
      </section>

      {/* Our hardware */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Built by Pathon Robotics
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Our own open hardware — CAD, printable STLs, and assembly guides in
            the repo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ours.map((item) => (
              <Link
                key={item.slug}
                href={`/robots/${item.slug}`}
                className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 bg-green-600 text-white rounded-full">
                    Pathon Robotics
                  </span>
                  <span className="absolute top-2 right-2 text-xs font-medium px-2 py-1 bg-white/90 text-gray-700 rounded-full">
                    {KIND_LABELS[item.kind]}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Robots by category */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Robots</h2>
          <p className="text-gray-600 text-center mb-8">
            Actuated machines you can drive on their own.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {getCategories(robots).map((cat) => {
              const count = robots.filter((r) => r.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/robots?kind=robot&category=${encodeURIComponent(cat)}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-center"
                >
                  <div className="font-semibold">{cat}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {count} {count === 1 ? "robot" : "robots"}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software — browser tools up front, repos under them */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Software</h2>
          <p className="text-gray-600 text-center mb-8">
            Tools that run in your browser, and the open-source code behind our
            robots.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg shrink-0">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-green-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 mt-4">
            {PROJECTS.map((project) => (
              <a
                key={project.href}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <h3 className="font-semibold shrink-0 group-hover:text-green-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {project.description}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/software"
              className="text-green-600 hover:underline text-sm font-medium"
            >
              All software &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
