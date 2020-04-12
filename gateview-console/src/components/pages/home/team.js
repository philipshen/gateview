import React, { useState } from 'react'
import { connect } from 'react-redux'

import AddTeamMemberDialog from 'components/shared/dialogs/add-team-member-dialog'
import ButtonBar from 'components/shared/button-bar'
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core'

// import { } from 'services/'
import { flashError, flashSuccess } from 'components/global-flash'

const useStyles = makeStyles(theme => ({

}))

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
})

function Team(props) {
  const classes = useStyles()
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  const [addTeamMemberDialogOpen, setAddTeamMemberDialogOpen] = useState(false)
  
  if (!hasFetchedData) {
    setHasFetchedData(true)
    Promise.all([
      
    ]).catch(flashError)
  }

  // Temp
  const teamMembers = [
    {
      name: 'Phil',
      email: 'beep@boop.com'
    },
    {
      email: 'turdsandwich123@yahoo.com'
    }
  ]
  
  return (
    <div>
      <AddTeamMemberDialog 
        onAddTeamMember={ () => {
          setAddTeamMemberDialogOpen(false)
        } }
        onClose={ () => setAddTeamMemberDialogOpen(false) }
        open={ addTeamMemberDialogOpen }
      />
      <ButtonBar 
        buttons={ [
          {
            title: 'Add Team Member',
            onClick: () => setAddTeamMemberDialogOpen(true)
          }
        ] }
      />
      <List>
        {teamMembers.map(teamMember => (
          <ListItem
            key={ teamMember.email }
          >
            <ListItemText 
              primary={ teamMember.name ? teamMember.name : teamMember.email }
              secondary={ teamMember.name ? teamMember.email : null }
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)