import React from 'react'
import { Helmet } from 'react-helmet-async'
import { StandardLayout } from '../layout/StandardLayout'

export const LegalNoticePage = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Legal Notice</title>
        <meta name="description" content="Legal Notice SEO" />
      </Helmet>
      <StandardLayout>
        <h1>Legal notice</h1>
        <p>Demo content for a legal notice.</p>
      </StandardLayout>
    </>
  )
}
