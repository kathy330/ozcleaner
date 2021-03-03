import React from 'react'
import { makeStyles, Grid, Typography, } from '@material-ui/core'
import { Star, StarHalf, StarBorder } from '@material-ui/icons/'

// style
const useStyles = makeStyles({
  stars: {
    color: 'rgb(255, 191, 0)',
  },
})

export default function Review() {
  const classes = useStyles()
  return (
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
  )
}
