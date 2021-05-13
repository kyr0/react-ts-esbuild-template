import { build, serve, ServeOptions } from 'esbuild'
import { resolve } from 'path'
import { createServer, IncomingMessage, request } from 'http'
import { spawn } from 'child_process'
import { buildConfig } from './buildConfig'

const clients: Array<any> = []
const port = 8000
const host = 'localhost'

const serveConfig: ServeOptions = {
  servedir: resolve(__dirname, '../public'),
}

build({
  ...buildConfig,
  banner: {
    js: `(() => new EventSource("/esbuild").onmessage = () => location.reload())();`,
  },
  watch: {
    onRebuild(error) {
      clients.forEach((result) => result.write('data: update\n\n'))
      clients.length = 0
      console.log(error || '[HMR] Rebuild done. Updating...')
    },
  },
})

// HMR serve
serve(serveConfig, {})
  .then(() => {
    createServer((req, res) => {
      const { url, method, headers } = req
      if (req.url === '/esbuild') {
        return clients.push(
          res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
          })
        )
      }
      const path =
        url!.split('/').pop()!.indexOf('.') > -1 ? url : `/index.html`

      return req.pipe(
        request(
          { hostname: '0.0.0.0', port, path, method, headers },
          (prxRes: IncomingMessage) => {
            res.writeHead(prxRes.statusCode!, prxRes.headers)
            prxRes.pipe(res, { end: true })
          }
        ),
        { end: true }
      )
    }).listen(port)

    // auto-open a browser pointing to the right web app URL
    // (standard web URL handler as browser)
    setTimeout(() => {
      const op: any = {
        darwin: ['open'],
        linux: ['xdg-open'],
        win32: ['cmd', '/c', 'start'],
      }
      const ptf = process.platform
      if (clients.length === 0)
        spawn(op[ptf][0], [...[op[ptf].slice(1)], `http://${host}:${port}`])
    }, 1000)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

console.log('Dev-serving (HMR) web app with options', serveConfig)
