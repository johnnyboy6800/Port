/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Portfolio_static',
  assetPrefix: '/Portfolio_static',
  trailingSlash: true,
}

module.exports = nextConfig;

