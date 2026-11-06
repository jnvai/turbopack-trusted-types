import type { NextConfig } from 'next'

// The only change from the reproduction template: a CSP that requires Trusted Types for scripts. It names no
// `trusted-types` directive, so any policy may be created. 'unsafe-inline' keeps Next's inline scripts running, so
// Trusted Types is the only restriction that matters here.
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline'; require-trusted-types-for 'script'",
          },
        ],
      },
    ]
  },
}

export default nextConfig
