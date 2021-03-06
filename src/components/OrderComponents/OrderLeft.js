import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'

import PostAddIcon from '@material-ui/icons/PostAdd'
import HomeIcon from '@material-ui/icons/Home'
import PaymentIcon from '@material-ui/icons/Payment'
import DetailInfo from './components/DetailInfo'

import ExtraPicker from './components/ExtraPicker'
import AddressInfo from './components/AddressInfo'
import PaymentInfo from './components/PaymentInfo'
// import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(() => ({
  top: {
    marginTop: '30px',
  },

  title: {
    marginBottom: '40px',
    marginTop: '10px',
  },

  extraIcon: {
    fontSize: '35px',
    marginTop: '10px',
    paddingTop: '5px',

  },

  iconRoot: {
    textAlign: 'center',
  },

  imageIcon: {
    height: '10vh',
    marginTop: '10px',
  }
}))

export default function OrderLeft() {
  const classes = useStyles()

  return(
    <Box className={classes.top}>
      

      <Grid container direction="column">
        <Container maxWidth="lg">
          <Grid item xs={6} sm={12}>
            <Typography variant='h4' align='left' className={classes.title}>
              Set up your cleaning service
            </Typography>
            
            {/* xsUp={false} 在屏幕大于xs的时候都会消失，如果前一页输入了这些信息，那这就是true，消失 */}

            <Hidden xsUp={false}>
              {/* <Hidden xsUp> */}
              <Typography variant='h5' align='left'>
                Please complete order information:
              </Typography>
              <DetailInfo />
            </Hidden>

            <Grid container alignItems="flex-end">
              <Grid item xs={6} sm={1}>
                <PostAddIcon className={classes.extraIcon} />
              </Grid>
              <Grid item xs={6} sm={11}>
                <Typography variant='h5'>
                  Do you need anything extra?
                </Typography>
              </Grid>
            </Grid>
            
            <ExtraPicker />
        
          </Grid>
        </Container>

        <Divider />

        <Container maxWidth="lg">
          <Grid container alignItems="flex-end">
            <Grid item xs={6} sm={1}>
              <HomeIcon className={classes.extraIcon} />
            </Grid>
            
            <Grid item xs={6} sm={11}>
              <Typography variant='h5'>
                Service Address
              </Typography>
            </Grid>

            <Grid item xs={6} sm={12}>
              <AddressInfo />
            </Grid>
          </Grid>
        </Container>

        <Divider />
          
        <Container maxWidth="lg">
          <Grid container alignItems="flex-end">
            <Grid item xs={6} sm={1}>
              <PaymentIcon className={classes.extraIcon} />
            </Grid>
            
            <Grid item xs={6} sm={11}>
              <Typography variant='h5'>
                Payment Information
              </Typography>
            </Grid>

            <Grid item xs={6} sm={12}>
              {/* false代表信息无误 */}
              <PaymentInfo 
                error={false}
                CardNumberText="Credit Card Number *"
                DateText="Expiry Date *"
                CVCText="Card Security Code *"
              />
            </Grid>
          </Grid>
        </Container>

      </Grid>
    </Box>
  )
}
