/* eslint-disable */
import React from 'react'
import { Grid, makeStyles, Box } from '@material-ui/core'
import AssessmentIcon from '@material-ui/icons/Assessment';
import { GreenStatus, GreyStatus, RedStatus, YellowStatus, BlueStatus } from '../../UIComponents/Status'
// import {
//   RedStatus, BlueStatusSquare, YellowStatusSquare, GreenStatusSquare, GreyStatusSquare, RedStatusSquare
// } from '../../UIComponents/Status'

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
  const uppercaseStatus = status.toUpperCase()
  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={2} sm={1} className={classes.icon}>
        <AssessmentIcon />
      </Grid>
      <Grid item justify="center" xs={10} sm={11} className={classes.text}>
        {/* <Typography variant="subtitle2">STATUS</Typography> */}
        {(status === 'confirmed') && (<GreenStatus>{uppercaseStatus}</GreenStatus>)}
        {(status === 'assigned') && (<GreenStatus>{uppercaseStatus}</GreenStatus>)}
        {(status === 'in-progress') && (<BlueStatus>{uppercaseStatus}</BlueStatus>)}
        {(status === 'finished') && (<GreyStatus>{uppercaseStatus}</GreyStatus>)}
        {(status === 'reviewed') && (<YellowStatus>{uppercaseStatus}</YellowStatus>)}
        {(status === 'cancelled') && (<RedStatus>{uppercaseStatus}</RedStatus>)}
      </Grid>
    </Box>
  )
}