import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// style
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingLeft: 10,
  },
})

export default function Extra() {
  return (
    <Grid container direction="column" className={classes.root}>
      <Typography variant="subtitle2">
        Extra
      </Typography>
      <Typography variant="body2">
        Oven, Fridge
      </Typography>
    </Grid>
  )
}
