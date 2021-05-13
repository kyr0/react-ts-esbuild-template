import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

import './StandardLayout.scss'

export const StandardLayout = ({
  children,
}: PropsWithChildren<any>): JSX.Element => {
  return (
    <>
      <header>Demo Webiste Header</header>
      {children}
      <footer>
        {/* We use enums and const whenever code/configuration would be
            duplicated in many places: Like URLs/paths to link */}
        <Link to={ROUTES.LEGAL_NOTICE}>Legal notice</Link>
      </footer>
    </>
  )
}
