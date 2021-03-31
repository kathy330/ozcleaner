/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'
import { makeStyles ,useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'
import {MenuItem} from '@material-ui/core' 
import LoginDetails from './LoginForm'

// import AppBar from '@material-ui/core/AppBar'
// import Tabs from '@material-ui/core/Tabs'

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
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 443,
  },
}))

export default function FormDialogMenuLogin() {
    const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    const theme = useTheme()
    const classes = useStyles()
    const [value, setValue] = React.useState(0)
  
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
  
    const handleChangeIndex = (index) => {
      setValue(index)
    }
    return (
      <>
        <MenuItem onClick={handleClickOpen}>
          Login
        </MenuItem>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth='xs'
        >
          <div className={classes.root}>
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
                <Tab label="Sign up as employee" {...a11yProps(1)} />
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
                <LoginDetails />
              </TabPanel>
            </SwipeableViews>
          </div>
        </Dialog>
       
      </>
    )
  }




