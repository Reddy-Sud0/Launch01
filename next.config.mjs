/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
