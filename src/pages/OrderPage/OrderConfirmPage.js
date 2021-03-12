import React from "react"
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Nav from '../../components/NavBarComponents/NavBar'
import OrderRight from "../../components/OrderComponents/OrderRight"
import Footer from '../../components/FooterComponents/Footer'
// import { PrimaryButton } from "../UI/Buttons"

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white'
  },

  content: {
    marginTop: '11vh',
    marginBottom: '35vh',
  },

  right: {
    background: 'white',
    margin: '10px',
    [theme.breakpoints.up('md')]: {
      height: '100%'
    }

  },

  left: {
    margin: '10px',
    paddingTop: '10vh',
    background: 'white',
    minHeight: "353px",
    paddingLeft: '5vh',
    maxWidth: '700px',
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: '11vh',
    }
  },

  button: {
    marginTop: '5vh',
    width: '200px',
    borderRadius: '30px'
  }
}))

function OrderConfirm() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Nav />
      <Container className={classes.content}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.left}>
            <Typography variant="h6">
              Your Order has been recieved!
            </Typography>
            <Typography variant="h6">
              We will email you once confirmed!
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
              View Order
            </Button>
          </Grid>

          <Grid item xs={12} sm={5} className={classes.right}>
            <Card>
              <OrderRight />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  )
}

export default OrderConfirm