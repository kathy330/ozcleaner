import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles,  Grid, Typography, Tabs, Tab, useTheme  } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import scssStyle from './scss/Profile.module.scss'
import ProfileRight from './ProfileRight'
import ProfileLeft from './ProfileLeft'
import PaymentHistory from './PaymentHistory'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))
function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    )
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  }
  
export default function AutoGrid() {
  const classes = useStyles()

  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  function handleChangeIndex(index) {
    setValue(index)
  }
  const mediumViewport = useMediaQuery('(min-width:600px)')
  return (
    <div className={classes.root}>
      <Grid container spacing={0} width='100vh'>
        <Grid item md={2} className={scssStyle.background1} />
        <Grid item md={2} sm={4} xs={12} className={scssStyle.background2}>
          <Grid container md={12} item lg={12} justify="center" alignItems="center">
            <ProfileLeft />
          </Grid>
          <Grid item xs={12} lg={12}>
            <>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                orientation={mediumViewport ? "vertical" : "horizontal"}
              > 
                <Tab label="Profile" />
                <Tab label="Order History" />
              </Tabs>
            </>
          </Grid>
        </Grid>
        <Grid item md={6} sm={8} xs={12} className={scssStyle.background}>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabContainer
              dir={theme.direction}
              className={scssStyle.background}
            >
              <ProfileRight />
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <PaymentHistory />
            </TabContainer>
          </SwipeableViews>
        </Grid>
        <Grid item md={2} />
      </Grid>
    </div>
  )
}
