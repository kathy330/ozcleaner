import { Grid, Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { LocationOn } from '@material-ui/icons'
// import style from '../scss/Admin.module.scss'

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

export default function Location(props) {
  const classes = useStyles()
  const { address } = props
  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={2} sm={1} className={classes.icon}>
        <LocationOn />
      </Grid>
      <Grid item justify="center" xs={10} sm={11} className={classes.text}>
        <Typography variant="subtitle2">LOCATION</Typography>
        <Typography variant="body2">{address}</Typography>
      </Grid>
    </Box>
  )
}
