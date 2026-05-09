/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/greek-isopsephy-forgotten-cousin-gematria',
        destination: '/blog/greek-isopsephy-gematria-ancient-hellenistic-world',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
