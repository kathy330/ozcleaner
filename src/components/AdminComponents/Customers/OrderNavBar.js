import React from 'react';
import { Grid, makeStyles, Box } from '@material-ui/core';
// import { PrimaryButton } from '../../../pages/UI/Buttons'
import { GreenStatus, GreyStatus, RedStatus } from '../../UIComponents/Status';
// import style from '../scss/Admin.module.scss'

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
}));

// navbars
export default function ContainedButtons() {
  const classes = navBarStyles();

  return (
    <Grid container className={classes.container}>
      <Box mr={3}>
        <RedStatus>UNCONFIRMED</RedStatus>
      </Box>
      <Box mr={3}>
        <GreenStatus>CONFIRMED</GreenStatus>
      </Box>
      <Box mr={3}>
        <GreyStatus>COMPLETED</GreyStatus>
      </Box>
      <Box mr={3}>
        <GreyStatus>CANCELLED</GreyStatus>
      </Box>
    </Grid>
  );
}
