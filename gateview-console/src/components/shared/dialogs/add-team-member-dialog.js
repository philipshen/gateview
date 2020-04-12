import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'

import ConfirmDialog from 'components/shared/dialogs/confirm-dialog'
import { FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox, TextField, makeStyles } from '@material-ui/core'

import { flashError, flashSuccess } from 'components/global-flash'

const useStyles = makeStyles(theme => ({
  section: {
    marginBottom: theme.spacing(3),
  }
}))

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
})

function AddTeamMemberDialog(props) {
  const classes = useStyles()
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  const [email, setEmail] = useState('')
  const [accounts, setAccounts] = useState({
    'Instagram': false,
    'Twitter': false
  })
  
  return (
    <ConfirmDialog
      onConfirm={ () => {
        if (!email) return flashError('Please enter an email address')
        props.onAddTeamMember()
      } }
      onClose={ props.onClose }
      open={ props.open }
      title='Add Team Member'
    >
      <TextField 
        className={ classes.section }
        fullWidth
        label='Email Address'
        onChange={ e => setEmail(e.target.value) }
        value={ email }
      />
      <FormControl 
        component='fieldset' 
      >
        <FormLabel component='legend'>
          Add to Accounts
        </FormLabel>
        <FormGroup>
          {Object.keys(accounts).map(account => (
            <FormControlLabel
              control={
                <Checkbox 
                  checked={ accounts[account] } 
                  onChange={ () => {
                    const newValue = !accounts[account]
                    setAccounts({ ...accounts, [account]: newValue })}
                  }
                  name={ account } 
                />
              }
              key={ account }
              label={ account }
            />
          ))}
        </FormGroup>
      </FormControl>
    </ConfirmDialog>
  )
}

AddTeamMemberDialog.propTypes = {
  onAddTeamMember: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamMemberDialog)