import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Button, Typography, makeStyles } from '@material-ui/core'

// import { } from 'services/'
import { flashError, flashSuccess } from 'components/global-flash'

import { fetchCurrentUser, logout } from 'services/auth-service'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(2),
  }
}))

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
})

function Settings(props) {
  const classes = useStyles()
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  const [user, setUser] = useState({})

  if (!hasFetchedData) {
    setHasFetchedData(true)
    Promise.all([
      fetchCurrentUser().then(user => setUser(user || {}))
    ]).catch(flashError)
  }
  
  return (
    <div className={ classes.container }>
      <Typography className={ classes.section }>
        Logged in as {user.email}
      </Typography>
      <Button 
        color='primary'
        onClick={ () => {
          logout()
          props.history.push('/login')
        } }
        variant='contained'
      >
        Sign Out
      </Button>
    </div>
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings))