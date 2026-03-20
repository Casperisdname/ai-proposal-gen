// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // This matches any request starting with /api
        source: '/api/:path*',
        // This redirects it to your Python backend
        destination: 'http://localhost:8000/:path*', 
      },
    ]
  },
};

export default nextConfig;