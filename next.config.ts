import type { NextConfig } from 'next';
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig: NextConfig = {
  // Explicit bundler declaration — silences the Turbopack/Webpack ambiguity
  // warning that causes WorkerError crashes in Vercel's build environment.
  turbopack: {},
  // Disable webpack's persistent filesystem cache so Vercel's incremental
  // builds don't serve stale worker state to the Workbox plugin.
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
};

export default withPWA(nextConfig);
