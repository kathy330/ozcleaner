/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import React , {useEffect} from "react"
// import { Redirect } from "react-router-dom" // 负责页面跳转router，不会刷新reducer👍
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {useSelector} from 'react-redux'
import {useHistory} from "react-router-dom"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Nav from '../../components/NavBarComponents/NavBar'
import OrderRight from "../../components/OrderComponents/OrderRight"
import Footer from '../../components/FooterComponents/Footer'
// import {buttonStyle} from '../../styles/styles'
import LoadingIcon from "../../components/AdminComponents/LoadingIcon"
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
      // paddingBottom: '15vh',
      // paddingTop: '30vh',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '25vh',
      paddingTop: '20vh',
    },
  }

  // button: {
  //   background: theme.palette.primary.main, // #007bf5
  //   borderRadius: '12px',
  //   color: theme.palette.primary.contrastText,
  //   fontSize: '1.4rem',
  //   paddingInline: '80px', // 太长，小屏幕装不下
  //   [theme.breakpoints.down('sm')]: {
  //     marginBottom: '5vh',
  //     marginTop: '5vh',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     marginTop: '14vh',
  //   },

  //   '&:hover': {
  //     background: theme.palette.primary.hover, // #0050c1
  //     boxShadow: '0px 2px 10px #888',
  //   },
  // }
}))

function OrderPay() {
  const classes = useStyles()
  // const buttonstyle = buttonStyle()

  const [type, setType] = React.useState({
    ordertype:''
  })

  // 1/2 直接从regular reducer取值回来
  // const loadingREGdata = useSelector(state => state.regular_in_reducer_index.loading)  
  const loadingNumREGdata = useSelector(state => state.regular_in_reducer_index.loadingNum)  
  const REGdata = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  
  // console.log('regular redex method: ',REGdata)

  // 2/2 直接从end reducer取值回来
  // const loadingENDdata = useSelector(state => state.regular_in_reducer_index.loading)  
  const loadingNumENDdata = useSelector(state => state.endoflease_in_reducer_index.loadingNum)  
  const ENDdata = useSelector(state => state.endoflease_in_reducer_index.repos_in_reducer_init)  
  // console.log('end redex method: ',ENDdata)

  // console.log(loadingNumREGdata,loadingNumENDdata)
  // 设置传参的data值
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

  // 2/2检测loding状态改变，实时更新state的type属性，传不同的data给下面orderRight
  // const error = false
  // let count = 0
  useEffect(()=>{
    if (loadingNumREGdata===2 && loadingNumENDdata===1) {
      console.log('rc')
      setType({ordertype:'RC'}) 
      // count += 1
      // console.log('1')
    }
    else if (loadingNumREGdata===1 && loadingNumENDdata===2) {
      console.log('ec')
      setType({ordertype:'EC'})
      // count += 1
      // console.log('2')
    }
    // else if (loadingNumREGdata===1 && loadingNumENDdata===1) {
    //   console.log('3')
    //   document.location.href = '/'
    // }
    // 无效。。 如果直接进入这个页面，两个都是num = 1，直接跳转到error页面
    // console.log(loadingNumREGdata,loadingNumENDdata)
    // if (loadingNumREGdata===1 && loadingNumENDdata===1) {
    //   console.log('no data, cant access')
    //   error = true // true代表下面进入error页面
    // }
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
    load = true // 没有数据，展示转圈
    // document.location.href = '/'
  }
  // const history = useHistory()
  // const paynow =() => {
  //   // history.push("/order/confirm")
  // }
  


  return (
    <>
      {/* {(ordertype==='') && (document.location.href = '/') } */}
      
      <Nav />
      {/* {load && <LoadingIcon />} */}
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

                  {/* <Grid item>
                    <Button
                      // href="/order/confirm" 
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={paynow}
                      disabled
                    >
                      Complete Booking
                    </Button>
                  </Grid> */}
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