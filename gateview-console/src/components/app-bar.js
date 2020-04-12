import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  AppBar as MAppBar,
  Toolbar, 
  Typography, 
  makeStyles,
} from '@material-ui/core'

// The app bar will be hidden on these routes
const blacklist = ['/login']

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  popoverContainer: {
    height: 1,
    overflow: 'visible',
    position: 'relative',
  },
  popover: {
    position: 'absolute',
    right: theme.spacing(1),
    zIndex: 100,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
  },
  logOutText: {
    color: theme.palette.error.main,
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    color: 'white',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
  },
}))

/**
 * This app bar will not appear on blacklisted pages (e.g. login)
 */
function AppBar(props) {
  const classes = useStyles()

  if (blacklist.includes(window.location.pathname)) {
    return props.children
  }

  return (
    <div>
      <MAppBar 
        className={ classes.appBar }
        position='sticky'
      >
        <Toolbar className={ classes.topBar }>
          <Typography
            className={ classes.title }
            noWrap
            variant='h6'
          >
            Gateview
          </Typography>
        </Toolbar>
      </MAppBar>
      <main className={ classes.content }>
        {props.children}
      </main>
    </div>
    
  )
}

export default withRouter(AppBar)