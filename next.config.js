/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // necessário se usar <Image />
  basePath: '/Portfolio_static', // importante
  trailingSlash: true
}

module.exports = nextConfig
