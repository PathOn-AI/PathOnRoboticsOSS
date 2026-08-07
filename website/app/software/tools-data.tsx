import type { ReactNode } from "react";

export interface Tool {
  name: string;
  description: string;
  href: string;
  icon: ReactNode;
}

// Browser tools — shared by /tools and the homepage preview.
export const TOOLS: Tool[] = [
  {
    name: "Point Cloud Viewer",
    description:
      "Upload and visualize PLY point cloud files in 3D directly in your browser. Supports ASCII and binary formats with vertex colors.",
    href: "/tools/pointcloud-viewer",
    icon: (
      <svg
        className="h-8 w-8 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
  },
  {
    name: "3D Gaussian Splatting Viewer",
    description:
      "Upload a trained Gaussian Splatting .ply (e.g. from Nerfstudio's splatfacto) and render it in-browser with WebGL2. Supports .ply, .spz, .splat, and .ksplat.",
    href: "/tools/3dgs-viewer",
    icon: (
      <svg
        className="h-8 w-8 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c-2.5 0-4-3-4-9s1.5-9 4-9m0 18c2.5 0 4-3 4-9s-1.5-9-4-9m-9 9h18"
        />
      </svg>
    ),
  },
];
