import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: "/opensource",
  // /tools was the old index for the browser viewers; they now live under
  // /software. The viewers keep their own /tools/* URLs.
  async redirects() {
    return [{ source: "/tools", destination: "/software", permanent: true }];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
