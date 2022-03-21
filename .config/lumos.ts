import type { LumosConfig } from '@oriflame/lumos';

const config: LumosConfig = {
  drivers: [
    'babel',
    'eslint',
    'jest',
    'prettier',
    'typescript',
  ],
  settings: {
    react: true,
    library: true,
    future: true,
  },
  module: '@oriflame/lumos',
};

export default config;
