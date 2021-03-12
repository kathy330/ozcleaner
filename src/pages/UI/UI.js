/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import KingBedIcon from '@material-ui/icons/KingBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import NoteIcon from '@material-ui/icons/Note';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RoomIcon from '@material-ui/icons/Room';
import { GreenStatus, GreyStatus, RedStatus } from '../../components/UIComponents/Status';
import {
  BookingButton,
  PrimaryButton,
  SecondaryButton,
} from '../../components/UIComponents/Buttons';
import HeaderNavigation from '../../components/NavBarComponents/NavBar';

export default function UI() {
  return (
    <>
      <HeaderNavigation />
      <Box p={2}>
        <Grid container spacing={2} direction="row" jus>
          <Grid item xs={12} sm={3}>
            <Box bgcolor="primary.main" color="white" p={2}>
              primary.main
            </Box>
            <Box bgcolor="primary.hover" color="white" p={2}>
              primary.hover
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box bgcolor="secondary.main" color="white" p={2}>
              secondary.main
            </Box>
            <Box bgcolor="secondary.hover" color="white" p={2}>
              secondary.hover
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box bgcolor="green.main" color="white" p={2}>
              green.main
            </Box>
            <Box bgcolor="green.hover" color="white" p={2}>
              green.hover
            </Box>
            <Box bgcolor="green.light" color="black" p={2}>
              green.light
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box bgcolor="red.main" color="white" p={2}>
              red.main
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box bgcolor="gery.main" color="white" p={2}>
              gery.main
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <PrimaryButton>Primary Button</PrimaryButton>
            <SecondaryButton>Secondary Button</SecondaryButton>
          </Grid>

          <Grid item xs={12} sm={3}>
            <BookingButton>Booking Button</BookingButton>
          </Grid>

          <Grid item xs={12} sm={3}>
            <GreenStatus>Green Status</GreenStatus>
            <GreyStatus>Grey Status</GreyStatus>
            <RedStatus>Red Status</RedStatus>
          </Grid>

          <Grid item xs={12} sm={3}>
            <KingBedIcon />
            <BathtubIcon />
            <NoteIcon />
            <CalendarTodayIcon />
            <RoomIcon />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography variant="h1">h1 do not use</Typography>
            <Typography variant="h2">h2 do not use</Typography>
            <Typography variant="h3">h3 Title</Typography>
            <Typography variant="h4">h4 Sub Title</Typography>
            <Typography variant="h5">h5 Common use</Typography>
            <Typography variant="h6">h6 Button Text</Typography>
            <Typography variant="h7">h7 Common Use</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
