const path = require('path');

const webglCompat = path.resolve(__dirname, 'lib/three-webgl-compat.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['midori-bg'],
  // midori-bg still imports three/examples/jsm/WebGL and expects the old
  // `{ WEBGL: { isWebGLAvailable } }` export shape.
  turbopack: {
    resolveAlias: {
      'three/examples/jsm/WebGL': './lib/three-webgl-compat.js',
      'three/examples/jsm/WebGL.js': './lib/three-webgl-compat.js',
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/jsm/WebGL': webglCompat,
      'three/examples/jsm/WebGL.js': webglCompat,
    };
    return config;
  },
};

module.exports = nextConfig;
