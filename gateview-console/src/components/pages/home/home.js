import React, { useState } from 'react'
import { connect } from 'react-redux'

import Settings from './settings'
import SwipeableViews from 'react-swipeable-views'
import Apps from './apps'
import { Button, AppBar, Divider, Paper, Tab, Tabs, Typography, makeStyles } from '@material-ui/core'

import { flashError } from 'components/global-flash'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    marginTop: theme.spacing(4),
    width: '50%'
  },
}))

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  actions: {
    
  },
})

function TabPanel(props) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={props.value !== props.index}
    >
      {props.value === props.index && props.children}
    </Typography>
  );
}


function Home(props) {
  const classes = useStyles()
  const { actions } = props
  const [hasFetchedData, setHasFetchedData] = useState(false)
  const [tab, setTab] = useState(0)
  
  // Temp dev flag
  const isAdmin = false

  if (!hasFetchedData) {
    setHasFetchedData(true)
    Promise.all([
    ]).catch(flashError)
  }
  
  return (
    <div className={ classes.container }>
      <Paper className={ classes.content }>
        <AppBar
          position='static'
        >
          <Tabs
            value={ tab }
            onChange={ (_, tab) => setTab(tab) }
            variant='fullWidth'
          >
            <Tab 
              label='Apps' 
              style={ { color: 'white' } }
            />
            <Tab 
              label='Settings' 
              style={ { color: 'white' } }
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis='x'
          index={ tab }
          onChangeIndex={ setTab }
        >
          <TabPanel 
            index={ 0 }
            value={ tab }
          >
            <Apps />
          </TabPanel>
          <TabPanel 
            index={ 1 }
            value={ tab }
          >
            <Settings />
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)