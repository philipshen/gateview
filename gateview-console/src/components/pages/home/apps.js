import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Button, List, ListItem, ListItemText, Typography, makeStyles } from '@material-ui/core'
import { OpenInNew } from '@material-ui/icons'

// import { } from 'services/'
import { flashError, flashSuccess } from 'components/global-flash'

const useStyles = makeStyles(theme => ({
  noTeamContainer: {
    padding: theme.spacing(3),
  },
  section: {
    marginBottom: theme.spacing(2)
  }
}))

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
})

function AppListItem(props) {
  const { app } = props
  const styles = useStyles()

  return (
    <ListItem
      button
      onClick={ () => console.log(app.name) }
    >
      <ListItemText 
        primary={ app.name }
      />
      <OpenInNew />
    </ListItem>
  )
}

function Apps(props) {
  const classes = useStyles()
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  
  // Temp dev flag
  const isInTeam = true
  const apps = [
    {
      name: 'Slack'
    },
    {
      name: 'Instagram'
    },
    {
      name: 'Twitter'
    }
  ]

  if (!hasFetchedData) {
    setHasFetchedData(true)
    Promise.all([
      
    ]).catch(flashError)
  }
  
  if (isInTeam) {
    return (
      <List>
        {apps.map(app => (
          <AppListItem 
            app={ app }
            key={ app.name } 
          />
        ))}
      </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(Apps)