import { type Robot } from "@/lib/robot-types";

/**
 * An entry's photo, or a neutral panel when there is not one yet. Placeholder
 * projects get published before there is anything to photograph, and a missing
 * file would otherwise render as a broken image.
 */
export function EntryImage({
  robot,
  className = "",
}: {
  robot: Pick<Robot, "image" | "name" | "category">;
  className?: string;
}) {
  if (robot.image) {
    return <img src={robot.image} alt={robot.name} className={className} />;
  }

  return (
    <div
      className={`${className} min-h-48 flex flex-col items-center justify-center gap-1 bg-gray-100 text-gray-400`}
    >
      <span className="text-xs font-medium uppercase tracking-[0.2em]">
        {robot.category}
      </span>
      <span className="text-xs">Photo coming</span>
    </div>
  );
}
