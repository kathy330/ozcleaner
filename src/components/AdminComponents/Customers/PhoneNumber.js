import { Grid, Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
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
  const { phoneNumber } = props
  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={2} sm={1} className={classes.icon}>
        <PhoneIcon />
      </Grid>
      <Grid item justify="center" xs={10} sm={11} className={classes.text}>
        <Typography variant="subtitle2">PHONE NUMBER</Typography>
        <Typography variant="body2">{phoneNumber}</Typography>
      </Grid>
    </Box>
  )
}
