require('esbuild').build({
  entryPoints: ['src/index.ts'],
  format: 'esm',
  bundle: true,
  outfile: 'dist/index.mjs',
}).catch(() => process.exit(1))