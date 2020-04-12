import PropTypes from 'prop-types'
import React from 'react'

import { Button, Divider, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}))

function ButtonBar(props) {
  const classes = useStyles()

  return (
    <div className={ classes.container }>
      <div className={ classes.buttonBar }>
        {props.buttons.map(button => (
          <Button
            color='secondary'
            className={ classes.button }
            key={ button.title }
            onClick={ button.onClick }
            variant='contained'
          >
            {button.title}
          </Button>
        ))}
      </div>
      <Divider orientation='horizontal' />
    </div>
  )
}

ButtonBar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object)
}

export default ButtonBar