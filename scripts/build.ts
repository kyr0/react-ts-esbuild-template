import { build } from 'esbuild'
import { buildConfig } from './buildConfig'

build({
  ...buildConfig,
  sourcemap: 'external',
  minify: true,
  minifySyntax: true,
  minifyIdentifiers: true,
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
