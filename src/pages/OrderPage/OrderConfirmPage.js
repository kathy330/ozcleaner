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
import Nav from '../../components/NavBarComponents/NavBar'
import OrderRight from "../../components/OrderComponents/OrderRight"
import Footer from '../../components/FooterComponents/Footer'
// import LoadingIcon from "../../components/AdminComponents/LoadingIcon"

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
  },

  content: {
    marginBottom: '35vh',
    marginTop: '11vh',
  },

  right: {
    background: 'white',
    margin: '10px',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    }

  },

  left: {
    background: 'white',
    margin: '10px',
    maxWidth: '700px',
    minHeight: "353px",
    paddingLeft: '5vh',
    paddingTop: '10vh',
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: '11vh',
    }
  },

  button: {
    borderRadius: '30px',
    marginTop: '5vh',
    width: '200px',
  }
}))

function OrderConfirm() {
  const classes = useStyles()

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
  useEffect(()=>{
    if (loadingNumREGdata===2 && loadingNumENDdata===1) {
      console.log('rc')
      setType({ordertype:'RC'}) 
    }
    if (loadingNumREGdata===1 && loadingNumENDdata===2) {
      console.log('ec')
      setType({ordertype:'EC'})
    }
    // 无效。。 如果直接进入这个页面，两个都是num = 1，直接跳转到error页面
    // console.log(loadingNumREGdata,loadingNumENDdata)
    // if (loadingNumREGdata===1 && loadingNumENDdata===1) {
    //   console.log('no data, cant access')
    //   error = true // true代表下面进入error页面
    // }
  },[loadingNumREGdata,loadingNumENDdata])

  const {ordertype} = type
  if (ordertype === 'RC') {
    data = REGdata
  }
  else if (ordertype === 'EC') {
    data = ENDdata
  }

  return (
    <>
      {/* {(error)&&(<Redirect to="/order/confirm/error" />)} */}
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
                <OrderRight data={data} />
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default OrderConfirm