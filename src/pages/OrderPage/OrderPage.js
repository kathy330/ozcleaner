import React from "react"
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import HeaderNavigation from '../../components/NavBarComponents/NavBar'
import OrderLeft from "../../components/OrderComponents/OrderLeft"
import OrderRight from "../../components/OrderComponents/OrderRight"


const useStyles = makeStyles((theme) => ({
  root: {
    // padding: 0,
    background: 'lightgrey',
    position: 'relative',
    zIndex: '-2',
  },

  content: {
    marginTop: '0px',
    position: 'relative',
    zIndex: '-1',
  },

  right: {
    [theme.breakpoints.down('sm')]: {
      background: 'blue',
    },
    [theme.breakpoints.between('sm','md')]: {
      background: 'red',
    },
    [theme.breakpoints.up('md')]: {
      background: '#a8f3ff',
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
      background: 'lightblue',
    }
  },

 
}))


function Order(){
  const classes = useStyles()

  return (
    <Box className={classes.root}>

      <HeaderNavigation />

      <Container maxWidth="lg" className={classes.content}>
        <Grid container spacing={0}>
          <Grid 
            item
            xs={12}
            sm={7}
            className={classes.left}
          >
            <OrderLeft />
          </Grid>

          <Grid 
            item
            xs={12}
            sm={5}
            justify="center"
            className={classes.right}
          >
            <OrderRight />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Order