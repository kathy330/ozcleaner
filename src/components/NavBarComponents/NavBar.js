/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
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
import {useHistory} from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu'
import Dialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import FormDialog from '../SignUpComponents/PopupForm'
import MenuDialog from '../SignUpComponents/PopupFormMenu'
import FormDialogLogin from '../SignUpComponents/PopupFormLogin'
import FormDialogMenuLogin from '../SignUpComponents/PopupFormLoginMenu'
import { navBarStyle } from '../../styles/styles'
import logo from "../../assets/logo.svg" 
import {signout,signoutEmployee} from "../../store/actions/actionCreator"
import LoginDetails from '../SignUpComponents/LoginForm'
import EmployeeLoginDetails from '../SignUpComponents/EmployeeLoginForm'


// https://www.flaticon.com/free-icon/broom_2731291


// 登陆弹窗 1/3
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box div={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
// 登陆弹窗 2/3
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}
// 登陆弹窗 3/3
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function HeaderNavigation(props) {
  const { trigger } = props
  const dispatch = useDispatch()

  // 1/1开始登陆窗口函数：
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(0)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose2 = () => {
    setOpen(false)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChangeIndex = (index) => {
    setValue(index)
  }
  // 1/1结束登陆窗口函数：

  const userSignin = useSelector((state) => state.userSignin)
  const {userInfo} = userSignin
  const employeeSignin = useSelector((state) => state.employeeSignin)
  const {employeeInfo} = employeeSignin


  const style = navBarStyle()
  const [anchor, setAnchor] = useState(null)
  const handleClick = (event) => {
    setAnchor(event.currentTarget)
  }


  const userinfoo = JSON.parse(localStorage.getItem('userInfo'))
  const employeeinfoo = JSON.parse(localStorage.getItem('employeeInfo'))
  const level = localStorage.getItem('authLevel')
  // console.log(level)
  let id=''
  let role=''

  if(userinfoo){
 
    id = userinfoo.data.objectID 
    // role = level === 'user'? 'users' : 'employees'
    // if(level==='user'){
      role = 'users'
    // }
    // else if(level==='employee'){
    //   role = 'employees'
    // }
    // else {
    //   role = 'admin'
    // }
  }

  if(employeeinfoo){
    role = 'employees'
    id = employeeinfoo.data.objectID 

  }
  // const ii = '6072ad2147e3bc290251987a'

  const signoutHandler = () => {
    dispatch(signout())
  }

  const employeesignoutHandler = () => {
    dispatch(signoutEmployee())
  }
  const handleClose = () => {
    setAnchor(null)
  }

  const history = useHistory()
  
  const pushOrder = () => {
    history.push("/order")
  }
  const pushMyOrder = () => {
    history.push(`/${role}/${id}`)
  }
  const pushMyProfile = () => {
    history.push("/profile")
  }

  return (
    <>
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
                <Button href={level==='user'?'/':'/employee-orders'}>
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

              {userInfo ? (
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
                    anchorel={anchor}
                    keepMounted
                    open={Boolean(anchor)}
                    onClose={handleClose}
                    anchor="right"
                  >
                    <MenuItem onClick={pushOrder}>Booking Now</MenuItem>
                    <MenuItem onClick={pushMyOrder}>My Order</MenuItem>
                    <MenuItem onClick={pushMyProfile}>My Profile</MenuItem>
                    <MenuItem onClick={signoutHandler}>Sign Out</MenuItem>
                  </Drawer>
                </>
            ) : (
              ''
            )}

              {employeeInfo ? (
                <>
                  <Box className={style.buttonsBox}>
                    <Button href='/employee-orders' className={style.bookingButton}>Browse Orders</Button>
                    <Button href={`/${role}/${id}`}>My Order</Button>
                    <Button href='/profile'>My Profile</Button>
                    <Button
                      onClick={employeesignoutHandler}
                    >
                      Sign Out
                    </Button>
                  </Box>
                  <Drawer
                    id="simple-menu"
                    anchorel={anchor}
                    keepMounted
                    open={Boolean(anchor)}
                    onClose={handleClose}
                    anchor="right"
                  >
                    <MenuItem onClick={pushOrder}>Browse Orders</MenuItem>
                    <MenuItem onClick={pushMyOrder}>My Order</MenuItem>
                    <MenuItem onClick={pushMyProfile}>My Profile</MenuItem>
                    <MenuItem onClick={employeesignoutHandler}>Sign Out</MenuItem>
                  </Drawer>
                </>
            ) : (
              ''
            )}

          
              {!employeeInfo && !userInfo ? (
                <>
                  <Box className={style.buttonsBox}>
                    <Button 
                      className={style.bookingButton}
                      onClick={handleClickOpen}
                    >
                      Booking Now
                    </Button>
                    <FormDialog />
                    <FormDialogLogin />
                  </Box>
              
                  <Drawer
                    id="simple-menu"
                    anchorel={anchor}
                    keepMounted
                    open={Boolean(anchor)}
                    onClose={handleClose}
                    anchor="right"
                  >
                    <MenuItem onClick={handleClickOpen}>Booking Now</MenuItem>
                    <MenuDialog />
                    <FormDialogMenuLogin />
                  </Drawer>
                </>
          ) : (
            ''
          )}
             
            
            </Toolbar>
          </Grid>
        </AppBar>
      </Slide>

      {/* 登陆弹窗样式 */}
      <Dialog
        open={open}
        onClose={handleClose2}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth='xs'
      >
        <div>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Login as customer" {...a11yProps(0)} />
              <Tab label="Login as employee" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <LoginDetails />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <EmployeeLoginDetails />
            </TabPanel>
          </SwipeableViews>
        </div>
      </Dialog>
    </>
  )
}
