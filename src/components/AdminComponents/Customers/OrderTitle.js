import React from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// styles
const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: '20px',
  },
  text: {
    marginLeft: 10
  },
  divider: {
    marginTop: 10,
    border: 'solid 1px #e8ebfa',
  }
}))


export default function OrderTitle() {
  const classes = styles()
  return (
    <Grid>
      <Typography variant="h4" className={classes.text}>
        Three bedroom apartment bond cleaning
      </Typography>
    </Grid>
  )
}