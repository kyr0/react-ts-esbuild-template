import React from 'react'
import { Helmet } from 'react-helmet-async'
import { StandardLayout } from '../layout/StandardLayout'
import { WelcomeMessage } from './homepage/WelcomeMessage'

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Helmet>
        {/* page specific meta tags can be placed as well */}
        <title>Homepage</title>
        <meta name="description" content="Homepage SEO description" />
      </Helmet>
      <StandardLayout>
        {/* instead of putting all the HTML content
            pieces of HTML content is sliced.
            These slices are called "Components".
            We give them good names to re-use them. */}
        <WelcomeMessage />
      </StandardLayout>
    </>
  )
}
