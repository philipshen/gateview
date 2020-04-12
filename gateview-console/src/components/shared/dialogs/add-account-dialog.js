import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import ConfirmDialog from 'components/shared/dialogs/confirm-dialog'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  section: {
    marginBottom: theme.spacing(2)
  }
}))

// import { } from 'services/'
import { flashError, flashSuccess } from 'components/global-flash'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
})

function AddAccountDialog(props) {
  const classes = useStyles()
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  const [app, setApp] = useState('Twitter')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Temp
  const apps = [
    'Twitter'
  ]
  
  if (!hasFetchedData) {
    setHasFetchedData(true)
    Promise.all([
      
    ]).catch(flashError)
  }
  
  return (
    <ConfirmDialog
      onConfirm={ () => {
        if (!app) return flashError('Please select an app')
        if (!username) return flashError('Please enter a username')
        if (!password) return flashError('Please enter a password')
        props.onAddAccount()
      } }
      onClose={ props.onClose }
      open={ props.open }
      title='Add Account'
    >
      <FormControl 
        className={ classes.section }
        component="fieldset"
      >
        <FormLabel component="legend">App</FormLabel>
        <RadioGroup 
          name='app'
          onChange={ e => setApp(e.target.value) }
          value={ app } 
        >
          {apps.map(app => (
            <FormControlLabel
              control={ <Radio /> }
              label={ app }
              value={ app }
            />
          ))}
        </RadioGroup>
      </FormControl>
      <TextField 
        className={ classes.section }
        fullWidth
        label='Username'
        onChange={ e => setUsername(e.target.value) }
        required
        value={ username }
      />
      <TextField 
        fullWidth
        label='Password'
        onChange={ e => setPassword(e.target.value) }
        required
        value={ password }
      />
    </ConfirmDialog>
  )
}

AddAccountDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onAddAccount: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAccountDialog)