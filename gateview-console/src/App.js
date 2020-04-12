import firebase from 'firebase'
import React, { useState } from 'react'
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import AppBar from 'components/app-bar'
import AuthRoute from 'components/authenticated-route'
import Breadcrumbs from 'components/breadcrumbs'
import GlobalFlash from 'components/global-flash'
import SplashScreen from 'components/pages/splash-screen'

import Home from 'components/pages/home/home'
import Login from 'components/pages/login'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#D94B0F' },
    secondary: { main: '#4BDFFF' },
  },
})

var firebaseConfig = {
  apiKey: "AIzaSyDXb0YYUBdStMeSDXs837B5kmWQ6WyQlTo",
  authDomain: "gateview-7bed1.firebaseapp.com",
  databaseURL: "https://gateview-7bed1.firebaseio.com",
  projectId: "gateview-7bed1",
  storageBucket: "gateview-7bed1.appspot.com",
  messagingSenderId: "764207558015",
  appId: "1:764207558015:web:989dfb61c447efd6d93e4a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App(props) {
  const { actions } = props

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Router>
        <GlobalFlash />
        <AppBar>
          <Switch>
            <Route component={ Login }
              exact
              path='/login' />
            <AuthRoute component={ Home }
              exact
              path='/home' />
          </Switch>
        </AppBar>
      </Router>
    </ThemeProvider>
  )
}

export default App
