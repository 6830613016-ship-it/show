import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://upload.wikimedia.org/**/**'),
      new URL('https://computing.psu.ac.th/**/**'),
      // new URL('https://avatars.githubusercontent.com/**/**?v=4'),
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**/**',
      }],
    dangerouslyAllowLocalIP: true
  },

};

export default nextConfig;