import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// styles
const navBarStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: 100,
    fontSize: 10,
    fontWeight: 50,
    margin: '25px 10px',
    backgroundColor: '#bec3dc',
    [theme.breakpoints.down('xs')]: {
      margin: '10px'
    },
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  }
}))


// navbars
export default function ContainedButtons() {
  const classes = navBarStyles()

  return (
    <Grid container className={classes.container}>
      <Button variant="contained" color="primary" className={classes.button}>
        UNCONFIRMED
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        CONFIRMED
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        COMPLETED
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        CANCELLED
      </Button>
    </Grid>
  )
}