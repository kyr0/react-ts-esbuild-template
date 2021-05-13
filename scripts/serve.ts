import { serve, ServeOptions } from 'esbuild'
import { resolve } from 'path'

const serveConfig: ServeOptions = {
  port: 8000,
  servedir: resolve(__dirname, '../public'),
}

serve(serveConfig, {})

console.log('Serving (dev/prod-similar)', serveConfig)
