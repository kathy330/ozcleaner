import React from 'react'
import { makeStyles, Grid, Typography,  Divider } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// style
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  divider: {
    marginTop: 10,
    border: 'solid 1px #e8ebfa',
    maxWidth: '80%',
    // marginLeft: 33
  }
})

export default function Extra() {
  const classes = useStyles()
  return (
    <Grid container direction="column">
      <Typography variant="subtitle2">
        Extra
      </Typography>
      <Typography variant="body2">
        Oven, Fridge
      </Typography>
      <Divider className={classes.divider} />
    </Grid>
  )
}
