/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Port',
  assetPrefix: '/Port',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig;

