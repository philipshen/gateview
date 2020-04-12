import React, { useState } from 'react'
import { connect } from 'react-redux'

import AddTeamMemberDialog from 'components/shared/dialogs/add-team-member-dialog'
import ButtonBar from 'components/shared/button-bar'
import { Checkbox, Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

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
  const [openDropdowns, setOpenDropdowns] = useState({})
  
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

  const apps = [
    'Slack', 'Thing'
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
        {teamMembers.map((teamMember, index) => (
          <div>
            <ListItem
              button
              onClick={ () => {
                const newValue = !openDropdowns[teamMember.email]
                setOpenDropdowns({ ...openDropdowns, [teamMember.email]: newValue })
              } }
              key={ teamMember.email }
            >
              <ListItemText 
                primary={ teamMember.name ? teamMember.name : teamMember.email }
                secondary={ teamMember.name ? teamMember.email : null }
              />
              {openDropdowns[teamMember.email] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse 
              in={ openDropdowns[teamMember.email] } 
              timeout='auto'
              unmountOnExit
            >
              <List component='div' disablePadding>
                {apps.map(app => (
                  <ListItem 
                    key={ app }
                  >
                    <ListItemIcon>
                      <Checkbox 
                        edge='start'
                        checked={ false }
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary={ app } />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            {index !== teamMembers.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)