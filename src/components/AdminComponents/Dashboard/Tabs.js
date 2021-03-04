import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Box, Tabs, Tab, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from './card'
import Overview from './Overview'


function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#e0e0e0',
    // theme.palette.grey.main
  },
  AppBar: {
    background:"white",
  },
  Tab: {
    color:'black'
  }

}))

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar} elevation={0.5}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.Tab} 
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="OVERVIEW" {...a11yProps(0)} />
          <Tab label="ORDERS" {...a11yProps(1)} />
          <Tab label="CUSTOMERS" {...a11yProps(2)} />
          <Tab label="STAFFS" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  )
}