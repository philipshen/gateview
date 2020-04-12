import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'

import SplashScreen from 'components/pages/splash-screen'

import { fetchLoginStatus } from 'services/auth-service'

function AuthenticatedRoute({ component: Component, ...rest }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  if (isLoggedIn == null) {
    fetchLoginStatus().then(setIsLoggedIn)
    return <SplashScreen />
  }

  return (
    <Route 
      { ...rest }
      render={ props => 
        isLoggedIn ? (
          <Component { ...props } />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}

export default AuthenticatedRoute