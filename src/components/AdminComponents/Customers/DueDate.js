import { Grid, Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { Today } from '@material-ui/icons'

// style
const useStyles = makeStyles(() => ({
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10
  },
}))

export default function Location() {
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={2} sm={1} className={classes.icon}>
        <Today />
      </Grid>
      <Grid item justify="center" xs={10} sm={11} className={classes.text}>
        <Typography variant="subtitle2">DUE DATE</Typography>
        <Typography variant="body2">11:30AM, Sunday, 24th Jan 2021</Typography>
      </Grid>
    </Box>
  )
}
