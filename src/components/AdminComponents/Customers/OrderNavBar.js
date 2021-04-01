import React from 'react'
import { Grid, makeStyles, Container } from '@material-ui/core'
// import { GreenStatus, GreyStatus, RedStatus } from '../../UIComponents/Status'
import { RedStatus } from '../../UIComponents/Status'

// styles
const navBarStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
    paddingTop: 4,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
}))

// navbars
export default function ContainedButtons() {
  const classes = navBarStyles()
  return (
    <Grid container className={classes.container}>
      <Container>
        <RedStatus>UNASSGINED</RedStatus>
      </Container>
      {/* <Box mr={3}>
        <GreenStatus>CONFIRMED</GreenStatus>
      </Box>
      <Box mr={3}>
        <GreyStatus>COMPLETED</GreyStatus>
      </Box>
      <Box mr={3}>
        <GreyStatus>CANCELLED</GreyStatus>
      </Box> */}
    </Grid>
  )
}
