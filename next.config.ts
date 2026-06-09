import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard', // Ensure this matches your actual dashboard path
        permanent: true,
      },
    ];
  },
};

export default nextConfig;