/* eslint-disable*/
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'
import { makeStyles ,useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'
//import RegistrationForm from './RegistrationForm'
//import EmployeeRegistrationForm from './Employee'

// import AppBar from '@material-ui/core/AppBar'
// import Tabs from '@material-ui/core/Tabs'
import LoginDetails from './LoginForm'
import EmployeeLoginDetails from './EmployeeLoginForm'
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
  [theme.breakpoints.down('sm')]: {
    textAlign:'center',
  },
  [theme.breakpoints.between('sm','md')]: {
    textAlign:'center',
  },
  [theme.breakpoints.up('md')]: {
    textAlign:'center',
  },
  /*
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 443,
  },*/
  login:{
    fontWeight: 'bold',
    color: '#007bf5',
    // float: 'right',
    fontSize:'12px',
    textDecoration: 'none',
    marginRight:'20px',
    marginTop:'-6px',
    marginBottom:'20px'
  },
}))

export default function FormDialogSignupPop() {
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
        <Button className={classes.login} onClick={handleClickOpen}>
           Login
        </Button>
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
                <Tab label="Sign up as customer" {...a11yProps(0)} />
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
                <EmployeeLoginDetails />
              </TabPanel>
            </SwipeableViews>
          </div>
        </Dialog>
       
      </>
    )
  }

