import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 1. ACTIVAR EXPORTACIÓN ESTÁTICA
  output: 'export', 
  
  // 2. CONFIGURACIÓN DE RUTA (Muy importante)
  // Si tu repo se llama "mi-proyecto", pon '/mi-proyecto'. 
  // Si es tu repo principal (usuario.github.io), déjalo como '' o bórralo.
  basePath: '/sangelgt',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // 3. DESACTIVAR OPTIMIZACIÓN NATIVA
    // GitHub Pages es un servidor estático y no puede procesar imágenes en tiempo real
    unoptimized: true, 
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
