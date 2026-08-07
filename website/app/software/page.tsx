import Link from "next/link";
import { TOOLS } from "./tools-data";
import { PROJECTS } from "./projects-data";

export const metadata = {
  title: "Software — Pathon Robotics Open Source",
  description:
    "Browser tools for robotics data visualization, and open-source code for building and controlling robots.",
};

export default function SoftwarePage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Software
        </h1>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
          Tools that run right here in your browser, and the open-source code
          behind our robots.
        </p>
      </div>

      {/* Browser tools first — they pay off immediately, no install */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">Browser tools</h2>
        <p className="text-gray-600 mb-6">
          Drop a file in and it renders locally — nothing is uploaded.
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
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects — folders in the one repo, not separate repos */}
      <section className="pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-gray-600 mb-6">
          Code you clone — each is a folder in the{" "}
          <a
            href="https://github.com/PathOn-AI/pathon_opensource"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            pathon_opensource
          </a>{" "}
          repo, with docs and setup instructions alongside the code.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.href}
              className="p-6 border border-gray-200 rounded-lg"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  {project.name}{" "}
                  <span className="text-gray-400 font-normal">&rarr;</span>
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </a>
              {project.children?.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 mt-4 pt-4 border-t border-gray-100"
                >
                  <span className="text-gray-300 shrink-0" aria-hidden>
                    &#9492;
                  </span>
                  <span>
                    <span className="font-semibold group-hover:text-green-600 transition-colors">
                      {child.name}{" "}
                      <span className="text-gray-400 font-normal">&rarr;</span>
                    </span>
                    <span className="block text-sm text-gray-600 mt-1">
                      {child.description}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
