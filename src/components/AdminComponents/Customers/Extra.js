import React from 'react'
import { makeStyles, Grid, Typography, Container, Divider } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// style
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  divider: {
    marginTop: 10,
    border: 'solid 1px #e8ebfa',
    width: '34.5vh',
    marginLeft: 33
  }
})

export default function Extra() {
  const classes = useStyles()
  return (
    <Container>
      <Grid container direction="column">
        <Grid item xs className={classes.paper}>
          <Typography variant="subtitle2">
            Extra
          </Typography>
        </Grid>
        <Grid item xs className={classes.paper}>
          <Typography variant="body2">
            Oven, Fridge
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    </Container>
  )
}
