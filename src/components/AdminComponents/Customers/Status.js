/* eslint-disable */
import React from 'react'
import { Grid, makeStyles, Container, Box, Typography } from '@material-ui/core'
import AssessmentIcon from '@material-ui/icons/Assessment';
// import { GreenStatus, GreyStatus, RedStatus } from '../../UIComponents/Status'
import {
  RedStatus, BlueStatusSquare, YellowStatusSquare, GreenStatusSquare, GreyStatusSquare, RedStatusSquare
} from '../../UIComponents/Status'

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
        {/* <Typography variant="subtitle2">STATUS</Typography> */}
        {(status === 'confirmed') && (<GreenStatusSquare>{status}</GreenStatusSquare>)}
        {(status === 'assigned') && (<GreenStatusSquare>{status}</GreenStatusSquare>)}
        {(status === 'in-progress') && (<BlueStatusSquare>{status}</BlueStatusSquare>)}
        {(status === 'finished') && (<GreyStatusSquare>{status}</GreyStatusSquare>)}
        {(status === 'reviewed') && (<YellowStatusSquare>{status}</YellowStatusSquare>)}
        {(status === 'cancelled') && (<RedStatusSquare>{status}</RedStatusSquare>)}
      </Grid>
    </Box>
  )
}