// Credit: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/page-layout-examples/sign-in/SignIn.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import red from '@material-ui/core/colors/red'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: red[500]
  }
})

class NotFound extends Component {
  render () {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <ErrorIcon />
            </Avatar>
            <Typography variant='headline'>Sorry, page not found!</Typography>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NotFound)
