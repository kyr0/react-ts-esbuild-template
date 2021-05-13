import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// React can import SCSS (Sass) files and bundle their styles with HTML
import './index.scss'

import { HomePage } from './pages/HomePage'
import { LegalNoticePage } from './pages/LegalNoticePage'
import { ROUTES } from './routes'

// printing some environment variables,
// read from .env or the actual environment
console.log('env', process.env.NODE_ENV)

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        {/* general meta tags can be placed here */}
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
      </Helmet>
      <Suspense fallback={null}>
        <Router>
          <Route exact path={ROUTES.HOME} render={() => <HomePage />} />
          <Route
            exact
            path={ROUTES.LEGAL_NOTICE}
            render={() => <LegalNoticePage />}
          />
        </Router>
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>,
  document.body.appendChild(document.createElement('div'))
)
