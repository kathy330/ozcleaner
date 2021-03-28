/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
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
  Drawer,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import FormDialog from '../SignUpComponents/PopupForm'
import MenuDialog from '../SignUpComponents/PopupFormMenu'
import FormDialogLogin from '../SignUpComponents/PopupFormLogin'
import FormDialogMenuLogin from '../SignUpComponents/PopupFormLoginMenu'
import { navBarStyle } from '../../styles/styles'

export default function HeaderNavigation(props) {
  const { trigger } = props

  const style = navBarStyle()
  const [anchor, setAnchor] = useState(null)
  const handleClick = (event) => {
    setAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setAnchor(null)
  }

  return (
    <Slide
      appear={false}
      in={trigger === null || trigger === undefined ? true : trigger}
      direction="down"
    >
      <AppBar
        position={trigger === null || trigger === undefined ? 'relative' : 'fixed'}
        className={style.AppBar}
      >
        <Grid item className={style.container}>
          <Toolbar>
            <Grid className={style.grow}>
              <Button href='/'>Logo</Button>
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
              <Button href='/order' className={style.bookingButton}>Booking Now</Button>
              <FormDialog />
              <FormDialogLogin />
            </Box>
            <Drawer
              id="simple-menu"
              anchorEl={anchor}
              keepMounted
              open={Boolean(anchor)}
              onClose={handleClose}
              anchor="right"
            >
              <MenuItem onClick={handleClose}>Booking Now</MenuItem>
              <MenuDialog />
              <FormDialogMenuLogin />
            </Drawer>
          </Toolbar>
        </Grid>
      </AppBar>
    </Slide>
  )
}
