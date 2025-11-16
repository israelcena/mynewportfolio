/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  compiler: {
    styledComponents: true,
  },
  eslint: {
    // Desabilitar ESLint durante o build (pode executar separadamente com npm run lint)
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
