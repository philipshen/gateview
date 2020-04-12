import React, { useState } from 'react'
import { connect } from 'react-redux'

import AddAccountDialog from 'components/shared/dialogs/add-account-dialog'
import ButtonBar from 'components/shared/button-bar'
import { Button, List, ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core'
import { OpenInNew } from '@material-ui/icons'

import { flashError, flashSuccess } from 'components/global-flash'

const useStyles = makeStyles(theme => ({
  noTeamContainer: {
    padding: theme.spacing(3),
  },
  section: {
    marginBottom: theme.spacing(2)
  },
}))

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
})

function Accounts(props) {
  const classes = useStyles()
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  const [addAccountDialogOpen, setAddAccountDialogOpen] = useState(true)
  
  // Temp dev flag
  const isInTeam = true
  const isAdmin = true

  const accounts = [
    {
      app: 'Slack'
    },
    {
      app: 'Instagram'
    },
    {
      app: 'Twitter'
    }
  ]

  if (!hasFetchedData) {
    setHasFetchedData(true)
    Promise.all([
      
    ]).catch(flashError)
  }
  
  if (isInTeam) {
    return (
      <div>
        {isAdmin && 
          <div>
            <AddAccountDialog 
              onAddAccount={ () => {
                setAddAccountDialogOpen(false)
              } }
              onClose={ () => setAddAccountDialogOpen(false) }
              open={ addAccountDialogOpen }
            />
            <ButtonBar 
              buttons={ [
                {
                  title: 'Add Account',
                  onClick: () => setAddAccountDialogOpen(true)
                }
              ] }
            />
          </div>
        }
        <List>
          {accounts.map(account => (
            <ListItem
              button
              key={ account.app }
              onClick={ () => console.log(account.app) }
            >
              <ListItemText 
                primary={ account.app }
              />
              <OpenInNew />
            </ListItem>
          ))}
        </List>
      </div>
    )
  } else {
    return (
      <div>
        <Typography 
          className={ classes.section }
        >
          It Looks like you're not in a team. Please contact your administrator to add 
          you to a team. If you are an administrator, press this button to create your 
          team.
        </Typography>
        <Button
          color='primary'
          onClick={ () => {} }
          style={ { color: 'white' } }
          variant='contained'
        >
          Create Team
        </Button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)