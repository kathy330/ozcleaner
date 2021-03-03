/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Button, AppBar, Toolbar, IconButton, Box, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import PropTypes from 'prop-types'
import { navBarStyle } from '../../styles/styles'
import FormDialog from '../SignUpComponents/PopupForm'

// https://material-ui.com/zh/components/app-bar/#usescrolltrigger-options-trigger
// 滑动消失/显示
function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true, // 默认值为false, 为true时会忽略在滚动的方向。
  })

  return (
    <Slide appear direction="down" in={trigger}>
      {children}
    </Slide>
  )
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}
/* eslint-disable react/jsx-props-no-spreading */
export default function HeaderNavigation(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    
  }
  
  


  
  const style = navBarStyle()
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={style.AppBar}>
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
                <FormDialog />
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
                <MenuItem onClick={handleClose}>Sign up</MenuItem>
                <MenuItem onClick={handleClose}>Login</MenuItem>
                
              </Menu>
            </Toolbar>
          </Grid>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}
