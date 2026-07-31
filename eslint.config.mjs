import nextConfig from 'eslint-config-next';

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'coverage/**'],
  },
  ...nextConfig,
];

export default config;
