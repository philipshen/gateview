import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'

import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '100vw',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
}))

function FullscreenPage(props) {
  const classes = useStyles()

  const isContentMode = props.contentMode === true

  const getContent = () => (
    isContentMode ? <Paper>{props.children}</Paper> : props.children
  )

  return (
    <div className={ clsx(classes.container, isContentMode && classes.contentContainer) }>
      {getContent()}
    </div>
  )
}

FullscreenPage.propTypes = {
  contentMode: PropTypes.bool
}

export default FullscreenPage