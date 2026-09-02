import { notFound } from "next/navigation";
import Link from "next/link";
import { EntryImage } from "../../entry-image";
import {
  embedFrameClass,
  embedUrl,
  getAllSlugs,
  getRobotBySlug,
  getSpecLabel,
  isPathon,
  KIND_LABELS,
  mediaPlatform,
  PLATFORM_LABELS,
} from "@/lib/robots";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const robot = getRobotBySlug(slug);
  if (!robot) return {};
  return {
    title: `${robot.name} — PathOn Robotics Open Source`,
    description: robot.description,
  };
}

export default async function RobotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const robot = getRobotBySlug(slug);
  if (!robot) notFound();

  const specEntries = Object.entries(robot.specs);
  const midpoint = Math.ceil(specEntries.length / 2);
  const specsLeft = specEntries.slice(0, midpoint);
  const specsRight = specEntries.slice(midpoint);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <Link
          href="/robots"
          className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors"
        >
          <span className="text-lg">&larr;</span>
        </Link>
        <h1 className="text-xl md:text-2xl font-bold uppercase tracking-widest">
          {robot.name}
        </h1>
        <span className="text-sm text-gray-400 uppercase tracking-wide">
          {robot.category}
        </span>
        <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
          {KIND_LABELS[robot.kind]}
        </span>
        {isPathon(robot) ? (
          <span className="text-xs font-semibold px-2 py-1 bg-green-600 text-white rounded-full">
            Built by PathOn Robotics
          </span>
        ) : (
          robot.maker && (
            <span className="text-sm text-gray-400">by {robot.maker}</span>
          )
        )}
      </div>

      {/* Hero: image + description */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pb-16 border-b border-gray-200">
        <div className="rounded-lg overflow-hidden bg-gray-100">
          <EntryImage
            robot={robot}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-start">
          <p className="text-lg text-gray-600 leading-relaxed">
            {robot.description}
          </p>
        </div>
      </section>

      {/* Components */}
      {robot.components.length > 0 && (
        <section className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-6">
            Components ({robot.components.length})
          </h2>
          <div className="flex flex-col">
            {robot.components.map((comp, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-4 py-3 ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <span className="font-medium text-gray-900">{comp.name}</span>
                <span className="text-sm text-gray-500">{comp.type}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Specifications */}
      {specEntries.length > 0 && (
        <section className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-6">
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <div className="flex flex-col">
              {specsLeft.map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-baseline justify-between py-2 border-b border-gray-100"
                >
                  <span className="text-sm text-gray-400">
                    {getSpecLabel(key)}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              {specsRight.map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-baseline justify-between py-2 border-b border-gray-100"
                >
                  <span className="text-sm text-gray-400">
                    {getSpecLabel(key)}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos & posts */}
      {robot.media.length > 0 && (
        <section className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-6">
            Videos &amp; Posts
          </h2>
          {/* Scrolls sideways, so the list takes the same room however long it gets */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6">
            {robot.media.map((item) => {
              const platform = mediaPlatform(item.url);
              const embed = embedUrl(item.url);
              return (
                <div
                  key={item.url}
                  className="snap-start shrink-0 w-[85%] sm:w-[26rem]"
                >
                  {/* Caption first, so cards of differing heights still line up */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block mb-3"
                  >
                    <span className="text-xs uppercase tracking-wide text-gray-400">
                      {PLATFORM_LABELS[platform]}
                    </span>
                    <span className="block font-medium group-hover:text-green-600 transition-colors">
                      {item.title}{" "}
                      <span className="text-gray-400 font-normal">&rarr;</span>
                    </span>
                  </a>
                  {embed ? (
                    <div
                      className={`${embedFrameClass(platform)} rounded-lg overflow-hidden bg-gray-100 border border-gray-200`}
                    >
                      <iframe
                        src={embed}
                        title={item.title}
                        loading="lazy"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-400">
                        View on {PLATFORM_LABELS[platform]} &rarr;
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* External link */}
      <div>
        <a
          href={robot.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          View project &rarr;
        </a>
      </div>
    </div>
  );
}
