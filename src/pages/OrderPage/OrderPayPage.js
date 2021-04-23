/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */

import React , {useEffect} from "react"
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {useSelector} from 'react-redux'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Nav from '../../components/NavBarComponents/NavBar'
import OrderRight from "../../components/OrderComponents/OrderRight"
import Footer from '../../components/FooterComponents/Footer'
import CheckoutForm from "../../components/testSaga/Testpay1-component"

const promise = loadStripe("pk_test_51IcU7EIhWqpXGeJaSNSsYJNlyh302mKpZUWBQBl7nZU1ISbLPKnCPHnCqjqdQV2iubeJs17bKXSHp8p95r9aigNQ00fTIv8f3f")

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '5vh',
      paddingTop: '10vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
 
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '25vh',
      paddingTop: '20vh',
    },
  }

}))

function OrderPay() {
  const classes = useStyles()

  const [type, setType] = React.useState({
    ordertype:''
  })

 const loadingNumREGdata = useSelector(state => state.regular_in_reducer_index.loadingNum)  
  const REGdata = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  

  const loadingNumENDdata = useSelector(state => state.endoflease_in_reducer_index.loadingNum)  
  const ENDdata = useSelector(state => state.endoflease_in_reducer_index.repos_in_reducer_init)  

  let data = {
    bedroomNum:'',
    bathroomNum:'',
    type:'',
    address:{
      address1:'',
      address2:'',
      suburb:'',
      state:'',
      postcode:''
    },
    startTime:'',
    price:0,
  }

  useEffect(()=>{
    if (loadingNumREGdata===2 && loadingNumENDdata===1) {
      console.log('rc')
      setType({ordertype:'RC'}) 
    }
    else if (loadingNumREGdata===1 && loadingNumENDdata===2) {
      console.log('ec')
      setType({ordertype:'EC'})
    }

  },[loadingNumREGdata,loadingNumENDdata])


  let load = false
  const {ordertype} = type
  if (ordertype === 'RC') {
    data = REGdata
  }
  else if (ordertype === 'EC') {
    data = ENDdata
  }
  else {
    load = true 
  }  


  return (
    <>
      
      <Nav />
      {load &&(
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Container maxWidth="sm">
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <Elements stripe={promise}>
                      <CheckoutForm />
                    </Elements>
                  </Grid>

                </Grid>
              </Container>
            </Grid>

            <Grid item xs={0} sm={1} />

            <Grid item xs={12} sm={5}>
              <Card>
                <OrderRight data={data} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      
      </Box>
       )} 
      <Footer />
    </>
  )
}

export default OrderPay