/* eslint-disable */
import React from 'react'
import { makeStyles, Grid, Typography, Button }from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '60vh',
  }
}))

/**
 * NoDataFound() if no data found on the page refresh the root path
 * @param refreshPage: (func) a callback func
 */
const NoDataFound = (props) =>{
  const { refreshPage } = props
  const classes = useStyles()

  return(
    <Grid className={classes.root}>
      <Typography variant="h3">No Data Found!</Typography>
      <Button variant="contained" color="primary" onClick={() => refreshPage()}>Refresh Page</Button>
    </Grid>
  )
}

export default NoDataFound