/* eslint-disable */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import logo from "../../assets/logo.svg" 
import {signout,signoutEmployee} from "../../store/actions/actionCreator"

// https://www.flaticon.com/free-icon/broom_2731291

export default function HeaderNavigation(props) {
  const { trigger } = props
  const dispatch = useDispatch()

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo} = userSignin
  console.log(userInfo)
  
  // 监听employee登录
  const employeeSignin =  useSelector((state) => state.employeeSignin)
  const {employeeInfo} = employeeSignin
  console.log(employeeInfo)
  // console.log(employeeInfo)


  const style = navBarStyle()
  const [anchor, setAnchor] = useState(null)
  const handleClick = (event) => {
    setAnchor(event.currentTarget)
  }


  const info = JSON.parse(localStorage.getItem('userInfo'))
  const level = localStorage.getItem('authLevel')
  // console.log(level)
  let id=''
  let role=''

  if(info){
 
  id = info.data.objectID 
  role = level === 'user'? 'users' : 'employees'
  
}


  const signoutHandler = () => {
    dispatch(signout())
  }

  const signoutEmployeeHandler = () => {
    dispatch(signoutEmployee())
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
              <Button href='/'>
                <img
                  src={logo} 
                  className={style.logoimg}
                  alt="Logo icon"
                />
                {/* Home */}
              </Button>
              {/* Logo */}
            </Grid>
            <IconButton
              className={style.menuButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          
            {userInfo? (
              <>
                <Box className={style.buttonsBox}>
                  <Button href='/order' className={style.bookingButton}>Booking Now</Button>
                  {/* <Button href=''>My Order</Button> */}
                  <Button href={`/${role}/${id}`}>My Order</Button>
                  <Button href='/profile'>My Profile</Button>
                  <Button
                    onClick={signoutHandler}
                  >
                   Sign Out
                  </Button>
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
                  <MenuItem>My Order</MenuItem>
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem onClick={signoutHandler}>Sign Out</MenuItem>
                </Drawer>
              </>
            ) :employeeInfo? (
              <>
                <Box className={style.buttonsBox}>
                  <Button href='/order' className={style.bookingButton}>Booking Now</Button>
                  {/*<Button href='/profile'>My Profile</Button>*/}
                  <Button
                    onClick={signoutEmployeeHandler}
                  >
                    Sign Out
                  </Button>
                  
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
                  {
                    /* <MenuDialog />
                  <FormDialogMenuLogin />*/
                  }
                  <MenuItem onClick={signoutEmployeeHandler}>Sign Out</MenuItem>
                 
                </Drawer>
              </>
            ):
            (
              <>
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
              </>
            )}
            
            
          </Toolbar>
        </Grid>
      </AppBar>
    </Slide>
  )
}
