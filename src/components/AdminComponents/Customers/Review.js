import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

// style
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 10,
  },
  rate: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1)
    }
  },
  textcolor:{
    color:'#007bf5'
  },
}))

export default function Review(props) {
  const classes = useStyles()
  const { rating, review } = props
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs>
        <Typography className={classes.textcolor} variant="subtitle2">
          Review From Customer
        </Typography>
      </Grid>
      <Grid item xs>
        <Grid container direction="row">
          <Grid item xs={1}>
            <Typography variant="subtitle1">
              {(rating === null) && (0)}
              {(rating !== null) && (rating)}
            </Typography>
          </Grid>
          <Grid item xs className={classes.rate}>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Typography variant="h6">
          {review}
        </Typography>
      </Grid>
    </Grid>
  )
}
