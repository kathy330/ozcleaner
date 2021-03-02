import React from 'react'
import { makeStyles, Grid, Typography, Container } from '@material-ui/core'
import { Star, StarHalf, StarBorder } from '@material-ui/icons/'


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
  },
  stars: {
    color: 'rgb(255, 191, 0)',
  },
  paper: {
    marginTop: 10,
  }
})

export default function Review() {
  const classes = useStyles()
  return (
    <Container className={classes.paper}>
      <Grid container direction="column">
        <Grid item xs>
          <Typography variant="subtitle2">
            Review From Customer
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid container direction="row">
            <Grid item xs={1}>
              <Typography variant="subtitle1">
                1.5
              </Typography>
            </Grid>
            <Grid item xs>
              <Star className={classes.stars} />
              <StarHalf className={classes.stars} />
              <StarBorder className={classes.stars} />
              <StarBorder className={classes.stars} />
              <StarBorder className={classes.stars} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs className={classes.paper}>
          <Typography variant="body2">
            Michael J. Is so nice, He completed his job in just three hours
            and made my apartment like fresh new!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
