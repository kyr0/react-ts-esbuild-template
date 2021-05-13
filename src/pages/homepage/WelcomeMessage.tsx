import React from 'react'
import Logo from '../../assets/logo.svg'
import './WelcomeMessage.scss'

// this component is placed in the "homepage" folder
// because it is only used in the HomePage
export const WelcomeMessage = (): JSX.Element => {
  return (
    <div className="WelcomeMessage">
      <div className="WelcomeMessage-div">
        <Logo className="WelcomeMessage-logo" />
        <p>
          Edit <code>src/pages/HomePage.tsx</code> and save to reload.
        </p>
        <a
          className="WelcomeMessage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  )
}
