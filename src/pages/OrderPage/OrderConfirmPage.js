import React  from "react"
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
import Nav from '../../components/NavBarComponents/NavBar'
import OrderRight from "../../components/OrderComponents/OrderRight"
import Footer from '../../components/FooterComponents/Footer'
// import {buttonStyle} from '../../styles/styles'
import LoadingIcon from "../../components/AdminComponents/LoadingIcon"

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
  },

  button: {
    background: theme.palette.primary.main, // #007bf5
    borderRadius: '12px',
    color: theme.palette.primary.contrastText,
    fontSize: '1.4rem',
    paddingInline: '80px', // 太长，小屏幕装不下
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5vh',
      marginTop: '5vh',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '10vh',
    },

    '&:hover': {
      background: theme.palette.primary.hover, // #0050c1
      boxShadow: '0px 2px 10px #888',
    },
  }
}))

function OrderConfirm() {
  const classes = useStyles()
  // const buttonstyle = buttonStyle()

  // const [type, setType] = useState({
  //   ordertype:''
  // })

  // 1/2 直接从regular reducer取值回来
  // const loadingREGdata = useSelector(state => state.regular_in_reducer_index.loading)  
  // const loadingNumREGdata = useSelector(state => state.order.loadingNum)  
  const orderData = useSelector(state => state.order.order)  
  // console.log('order data from redex: ',orderData)

  // 2/2 直接从end reducer取值回来
  // const loadingENDdata = useSelector(state => state.regular_in_reducer_index.loading)  
  // const loadingNumENDdata = useSelector(state => state.endoflease_in_reducer_index.loadingNum)  
  // const ENDdata = useSelector(state => state.endoflease_in_reducer_index.repos_in_reducer_init)  
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


  let load = true // 没有数据，展示转圈  
  if(orderData.type === 'RC' || orderData.type === 'EC') {
    data = orderData
    load = false 
    // document.location.href = '/'
  }

  // const objid = '60633a30bad120ff885aa99c'
  const {_id} = orderData
  const aa = orderData.type
  const orderUrl = `/order-detail/${_id}?type=${aa}`
  const employeeinfoo = JSON.parse(localStorage.getItem('employeeInfo'))
  const history = useHistory()

  return (
    <>
      {employeeinfoo?history.push("/employee-orders"):''}
      <Nav />
      {load && <LoadingIcon />}
      {!load && (
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Container maxWidth="sm">
                <Grid container direction="column" alignItems="flex-start">
                  <Grid item>
                    <Typography variant="h4">
                      Your Order has been recieved. 
                      <br />
                      {/* We will email you once confirmed! */}
                      Thank you!
                    </Typography>
                  </Grid>

                  <Grid item>
                    {/* <form onSubmit={handleSubmit()}> */}
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      type="submit"
                      href={orderUrl}
                    >
                      View Order
                      {/* Pay Now */}
                    </Button>
                    {/* </form> */}
                  </Grid>
                </Grid>
              </Container>
            </Grid>

            <Grid item xs={false} sm={1} />

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

export default OrderConfirm