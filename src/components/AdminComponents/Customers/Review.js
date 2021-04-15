import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

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
  rating: {
    padding: '5px 10px'
  },
  textcolor:{
    color:'#007bf5'
  },
  comment:{
    background: '#efefef',
    padding: '10px'
  }
}))

export default function Review(props) {
  const classes = useStyles()
  const { rating, review } = props
  return (
    <Grid container direction="column" className={classes.root}>
      <Typography className={classes.textcolor} variant="subtitle2">
        Review From Customer
      </Typography>
      <Grid container direction="row" alignItems="center">
        <Typography variant="subtitle1" className={classes.rating}>
          {!rating && (0)}
          {rating && (rating)}
        </Typography>
        <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
      </Grid>
      {review && (
        <Typography variant="body1" className={classes.comment}>
          {review}
        </Typography>
      )}
      {/* {!review && (
        <Typography variant="body1" className={`${classes.comment} ${classes.textcolor}`}>
          Wait for customer review.
        </Typography>
      )} */}
    </Grid>
  )
}
