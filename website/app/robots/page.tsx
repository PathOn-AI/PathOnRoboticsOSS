import { Suspense } from "react";
import { getAllRobots } from "@/lib/robots";
import { FilteredRobotGrid, RobotGrid } from "./robot-grid";

export const metadata = {
  title: "Robots & Parts — PathOn Robotics Open Source",
  description:
    "Robots we build at PathOn Robotics, the 3D-printable parts and mounts that go on them, and a map of the open-source platforms we work with.",
};

export default function RobotsPage() {
  const robots = getAllRobots();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Robots &amp; Parts
        </h1>
        <p className="text-gray-600 text-lg">
          Hardware we build at PathOn Robotics, plus a curated map of the
          open-source and low-cost platforms we work with. Click any entry to
          learn more.
        </p>
      </div>

      {/* What counts as what */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="font-semibold mb-1">Robots</div>
          <p className="text-sm text-gray-600">
            Anything with motors you drive — arms, mobile bases, quadrupeds,
            teleoperation leaders, and end-effectors like dexterous hands and
            grippers.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="font-semibold mb-1">Mounts &amp; Adapters</div>
          <p className="text-sm text-gray-600">
            Passive 3D-printed hardware that bolts onto a robot — sensor
            brackets, arm-to-tool adapters. No actuators of their own.
          </p>
        </div>
      </div>

      {/* Fallback is the unfiltered grid, so the prerendered HTML holds every card. */}
      <Suspense fallback={<RobotGrid robots={robots} />}>
        <FilteredRobotGrid robots={robots} />
      </Suspense>
    </div>
  );
}
