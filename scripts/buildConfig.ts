import { BuildOptions } from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'
import { resolve } from 'path'

const svgrPlugin = require('esbuild-plugin-svgr')
const browserslist = require('browserslist')
const { esbuildPluginBrowserslist } = require('esbuild-plugin-browserslist')

// read environment variables from .env file
require('dotenv').config({ path: resolve(__dirname, '../.env') })

const env: string = process.env.NODE_ENV || 'development'

const processEnvVars: { [key: string]: string } = {
  NODE_ENV: env,
}

// filter environment variable names to make sure not to expose env vars unintentionally
for (const key in process.env) {
  if (key.startsWith('NODE_ENV') || key.startsWith('APP_')) {
    processEnvVars[`process.env.${key}`] = JSON.stringify(process.env[key])
  }
}
const projectPackageJson: any = require(resolve(__dirname, '../package.json'))

// determine supported browsers/versions from browserslist and set target ES/build standards
// according to that
const browserslistConfig = browserslist(projectPackageJson.browserslist[env])

// mark all project node_modules dependencies to be external
const external = []
for (const npmModuleName in projectPackageJson.dependencies) {
  external.push(npmModuleName)
}

export const buildConfig: BuildOptions = {
  entryPoints: [resolve(__dirname, '../src/index.tsx')],
  bundle: true,
  sourcemap: 'both',
  outdir: resolve(__dirname, '../public/dist'),
  // external,
  logLevel: 'info',
  define: {
    ...processEnvVars,
  },
  plugins: [
    sassPlugin(),
    svgrPlugin(),
    esbuildPluginBrowserslist(browserslistConfig, {
      printUnknownTargets: false,
    }),
  ],
}

console.log('esbuild config', buildConfig)
