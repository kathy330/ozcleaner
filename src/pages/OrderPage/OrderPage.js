import React from "react"
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {BookingButton } from '../UI/Buttons'

import HeaderNavigation from '../../components/NavBarComponents/NavBar'
import OrderLeft from "../../components/OrderComponents/OrderLeft"
import OrderRight from "../../components/OrderComponents/OrderRight"
import Footer from '../../components/FooterComponents/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: 0,
    background: 'lightgrey'
    // position: 'relative',
    // zIndex: '-2',
  },

  content: {
    // marginBottom: '11vh',
    // marginLeft: '11vh',
    // marginRight: '11vh',
    marginTop: '11vh'
    // padding: 0
    // position: 'relative',
    // zIndex: '-1',
  },

  right: {
    [theme.breakpoints.down('sm')]: {
      background: 'blue',
    },
    [theme.breakpoints.between('sm','md')]: {
      background: 'red',
    },
    [theme.breakpoints.up('md')]: {
      // background: '#a8f3ff',
      background: 'white',
      height: '100%' // 右侧白框设置高度，否则跟左侧一样长
    }
  },

  left: {
    [theme.breakpoints.down('sm')]: {
      background: 'red',
    },
    [theme.breakpoints.between('sm','md')]: {
      background: 'grey',
    },
    [theme.breakpoints.up('md')]: {
      // background: 'lightblue',
      background: 'white',
      height: '100%',
      marginBottom: '11vh',
    }
  },

  bookingButton: {
    margin: '30px 0',
    textAlign: 'center'
    // padding: '30px',
  }

 
}))


function Order(){
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <HeaderNavigation />
      <Container maxWidth="lg" className={classes.content}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} className={classes.left}>
            
            <OrderLeft />

            <Container maxWidth="lg" className={classes.bookingButton}>
              <BookingButton>Complete Booking</BookingButton>
            </Container>

          </Grid>

          {/* 这是中间的灰色间隔 */}
          <Grid item xs={12} sm={1} /> 
         
          <Grid item xs={12} sm={5} className={classes.right}>
            <OrderRight />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  )
}

export default Order