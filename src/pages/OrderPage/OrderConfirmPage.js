import React from "react"
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


import Nav from '../../components/NavBarComponents/NavBar'
import OrderRight from "../../components/OrderComponents/OrderRight"
import Footer from '../../components/FooterComponents/Footer'
import { PrimaryButton } from "../UI/Buttons"

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'lightgrey'
  },

  content: {
    marginTop: '11vh',
    marginBottom: '35vh'
  },

  right: {
    background: 'white',
    [theme.breakpoints.up('md')]: {
      height: '100%'
    }
  },

  left: {
    paddingTop: '10vh',
    background: 'white',
    minHeight: "353px",
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: '11vh',
    }
  },

  button: {
    marginTop: '3vh',
    textAlign: 'center',
  }
}))


function OrderConfirm() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Nav />
      <Container maxWidth="lg" className={classes.content}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} className={classes.left}>
            <Container maxWidth="lg" className={classes.text}>
              <Typography variant="h6">
                Your Order has been recieved!
              </Typography>
              <Typography variant="h6">
                We will email you once confirmed!
              </Typography>
              <Grid item xs={12} className={classes.button}>
                <PrimaryButton>
                  View Order
                </PrimaryButton>

              </Grid>
            </Container>
          </Grid>


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

export default OrderConfirm