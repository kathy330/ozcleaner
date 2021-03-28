/* eslint-disable */
import React from 'react'
import { Grid, makeStyles, Container, Box, Typography } from '@material-ui/core'
import AssessmentIcon from '@material-ui/icons/Assessment';
// import { GreenStatus, GreyStatus, RedStatus } from '../../UIComponents/Status'
import { GreenStatus, GreyStatus, RedStatus } from '../../UIComponents/Status'

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

export default function Status(props) {
  const classes = useStyles()
  const { status } = props
  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={2} sm={1} className={classes.icon}>
        <AssessmentIcon />
      </Grid>
      <Grid item justify="center" xs={10} sm={11} className={classes.text}>
        <Typography variant="subtitle2">STATUS</Typography>
        {(status === 'confirmed') && (<RedStatus>{status}</RedStatus>)}
        {(status === 'assgined') && (<GreenStatus>{status}</GreenStatus>)}
        {(status === 'in-progress') && (<GreenStatus>{status}</GreenStatus>)}
        {(status === 'finished') && (<GreyStatus>{status}</GreyStatus>)}
        {(status === 'reviewed') && (<RedStatus>{status}</RedStatus>)}
        {(status === 'cancelled') && (<GreyStatus>{status}</GreyStatus>)}
      </Grid>
    </Box>
  )
}