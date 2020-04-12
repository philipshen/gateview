import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import FullscreenPage from 'components/shared/fullscreen-page'
import { Button, Typography, makeStyles } from '@material-ui/core'

import { flashError } from 'components/global-flash'
import { loginWithGoogle } from 'services/auth-service'

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  signInButton: {
    width: '100%',
    marginTop: theme.spacing(2)
  }
}))

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  actions: {
  },
})

function Login(props) {
  const classes = useStyles()
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  
  if (!hasFetchedData) {
    setHasFetchedData(true)
    Promise.all([
      
    ]).catch(flashError)
  }

  return (
    <FullscreenPage contentMode>
      <div className={ classes.content }>
        <Typography variant='h5'>
          Welcome to Gateview!
        </Typography>
        <Button 
          className={ classes.signInButton }
          color='primary'
          onClick={ () => {
            loginWithGoogle()
              .then(() => props.history.push('/home'))
              .catch(flashError)
          } }
          variant='contained'
        >
          Sign In
        </Button>
      </div>
    </FullscreenPage>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)