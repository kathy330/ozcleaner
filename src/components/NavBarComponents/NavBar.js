/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  Slide,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { navBarStyle } from '../../styles/styles';

export default function HeaderNavigation(props) {
  const { trigger } = props;
  const style = navBarStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Slide appear={false} in={!trigger} direction="down">
      <AppBar className={style.AppBar}>
        <Grid item className={style.container}>
          <Toolbar>
            <Grid className={style.grow}>
              <Button>Logo</Button>
            </Grid>
            <IconButton
              className={style.menuButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Box className={style.buttonsBox}>
              <Button className={style.bookingButton}>Booking Now</Button>
              <Button>Sign Up</Button>
              <Button>Login</Button>
            </Box>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Booking Now</MenuItem>
              <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Menu>
          </Toolbar>
        </Grid>
      </AppBar>
    </Slide>
  );
}
