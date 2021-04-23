/* eslint-disable max-len */
/* eslint-disable no-empty */
// /* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */

import React,{useEffect,useState} from 'react'
// import { Redirect, Route, Switch } from 'react-router'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import { BookingButton } from '../../components/UIComponents/Buttons'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {MuiPickersUtilsProvider,KeyboardDatePicker,KeyboardTimePicker} from "@material-ui/pickers"
import DateRangeIcon from '@material-ui/icons/DateRange'
import DateFnsUtils from '@date-io/date-fns'
import TextField from '@material-ui/core/TextField'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import date from 'date-and-time'
import Moment from 'react-moment'
import HomeIcon from '@material-ui/icons/Home'
import PostAddIcon from '@material-ui/icons/PostAdd'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
// import PaymentIcon from '@material-ui/icons/Payment'
import Icon from '@material-ui/core/Icon'
// import Link from '@material-ui/core/Link'
import { useForm,Controller } from "react-hook-form"
import {useSelector} from 'react-redux'
import KingBedIcon from '@material-ui/icons/KingBed'
import BathtubIcon from '@material-ui/icons/Bathtub'
import HelpIcon from '@material-ui/icons/Help'
import CreateIcon from '@material-ui/icons/Create'
import RoomIcon from '@material-ui/icons/Room'
import NoteIcon from '@material-ui/icons/Note'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
// import IconButton from '@material-ui/core/IconButton'
// import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
// import { Redirect } from "react-router-dom" // 负责页面跳转router，不会刷新reducer👍
import {useHistory} from "react-router-dom"
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions'
// import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
// import OrderPay from "./OrderPayPage"
// import ProtectedRoute from '../../router/ProtectedRoute'
import cabinetIcon from "../../assets/cabinet3.svg"
import windowIcon from "../../assets/window3.svg"
import fridgeIcon from "../../assets/fridge3.svg"
import ovenIcon from "../../assets/oven3.svg"
import regularIcon from "../../assets/regular.svg"
import endleaseIcon from "../../assets/endoflease.svg"
import N1 from "../../assets/1.svg"
import N2 from "../../assets/2.svg"
import N3 from "../../assets/3.svg"
import N4 from "../../assets/4.svg"
// import { BookingButton } from "../../components/UIComponents/Buttons"
import { buttonStyle } from '../../styles/styles'
// import {postRegularRequest,postEndOfLeaseRequest,payOrderRequest } from '../../store/actions'
// import outDatePay from '../../components/OrderComponents/components/outDatePay'
import HeaderNavigation from '../../components/NavBarComponents/NavBar'
// import OrderLeft from '../../components/OrderComponents/OrderLeft'
// import OrderRight from '../../components/OrderComponents/OrderRight'
import Footer from '../../components/FooterComponents/Footer'
import HomeComponentStyle from "../../components/HomeComponents/styles/HomeComponentStyle"
import CheckoutForm from "../../components/OrderComponents/components/StripePay"
import "../../components/OrderComponents/components/pay.css"
import './order.css'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#e3f2fd'
    // background: '#29b6f6',
  },

  content: {
    marginTop: '11vh',
  },

  // 下拉样式
  selected: {
    '&$selected': {
      backgroundColor: 'white',

      '&:hover': {
        backgroundColor: '#67a9ff',

      }
    },
  },

  extratxt2: {
    fontSize: '35px',
  },

  dialog: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    // marginTop: '20vh',
    width: '100%',
    
  },

  right: {
    borderRadius: '5px',
    // bottom: 20,
    boxShadow: '1px 1px 5px #888',
    position: 'sticky',
    top: 20,
    // zIndex: 5,
    [theme.breakpoints.down('sm')]: {
      background: 'white',
      height: '100%',
      marginBottom: '11vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      background: 'white',
      height: '100%',
      marginBottom: '11vh',
    },
    [theme.breakpoints.up('md')]: {
      // background: '#a8f3ff',
      background: 'white',
      height: '100%' // 右侧白框设置高度，否则跟左侧一样长
    },
  },

  left: {
    borderRadius: '5px',
    boxShadow: '1px 1px 5px #888',
   
    [theme.breakpoints.down('sm')]: {
      background: 'white',
      // height: '100%',
      marginBottom: '11vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      background: 'white',
      // height: '100%',
      marginBottom: '11vh',
    },
    [theme.breakpoints.up('md')]: {
      // background: 'lightblue',
      background: 'white',
      // height: '100%',
      marginBottom: '30vh',
      
    },
  },

  // 左侧组件style：
  pickerRoot: {
    marginBottom: '10px',
    marginTop: '5px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '15px',
    },
  },

  inputRoot: {
    marginBottom: '10px',
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '20px',
    },
  },

  input: {
    marginBottom: '10px',
    marginTop: '20px',
    width: '100%',
  },

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
  },

  bookingButton: {
    margin: '30px 0',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '15px',
    }
    // padding: '30px',
  },

  actionArearoot: {
    marginBottom: '10px',
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '15px',
    },
  },

  pickerBackground: {
    // background: 'lightgrey' // 最外层灰色背景
    // background: '#e3f2fd' // 最外层灰色背景
    background: '#48cae4' // 最外层灰色背景
  },

  pickernotchoose: {
    background: '#fafafa',
  },

  picker: {
    margin: '4px' // 最外层灰色间距
    // "&:hover": { transform: "scale3d(1.05, 1.05, 1)", }, //hover放大效果
  },

  actionArea: {
    padding: '0 5px' // 白色区域间距
  },

  actionArea2: {
    height: '100px',
    padding: '0 5px' // 白色区域间距
  },

  actionAreaimageIcon: {
    width: '100%',
  },

  check: {
    padding: '0px' // 让hover效果消失
  },

  // 右侧组件style：

  text: {
    paddingLeft: '10px',
  },

  icon: {
    color: '#707070',
    fontSize: '30px',
  },

  hover: {
    padding: 0,
  },

  price: {
    color: '#29b6f6',
  },

  priceArea: {
    paddingBottom: '20px',
    paddingTop: '20px',
  },

  rightTop: {
    paddingBottom: '10px',
    paddingTop: '40px',
  },

  details: {
    // height: '30vh',
    marginBottom: '30px'
    // paddingTop: '20px',
  },

  extratxt: {
    color: '#616161',
  }

}))

const SelectStyle = { 
  // 设置点开选项后的下拉样式
  // 弹出效果API： https://material-ui.com/zh/api/popover/
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left"
  },
  getContentAnchorEl: null
  // getContentAnchorEl:'null | undefined'
}


// 提交后，自动返回页面顶部
function ScrollTop(props) {
  const { children } = props

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')
    // 这个按钮会跳转到id为这个的组件上(设置的是home button为此id)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'end' }) // start,center,end为滑动到该元素的哪个位置
    }
  }

  return (
    <div onClick={handleClick} role="presentation">
      {children}
    </div>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
}


function Order(props) {
  const classes = useStyles()
  const cssstyle = HomeComponentStyle()
  const buttonstyles = buttonStyle()

  const promise = loadStripe("pk_test_51IcU7EIhWqpXGeJaSNSsYJNlyh302mKpZUWBQBl7nZU1ISbLPKnCPHnCqjqdQV2iubeJs17bKXSHp8p95r9aigNQ00fTIv8f3f")
  const { handleSubmit, control, watch,reset } = useForm()
  // const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const [extraState, setExtraState] = useState({
    oven: false,
    fridge: false,
    windows: false,
    cabinet:false,
    extradisable:false,
    submit:false
  })

  const [bedroompick, setbedroompick] = useState({
    bedA: false,
    bedB: false,
    bedC: false,
    bedD:false,
  })

  const [bathroompick, setbathroompick] = useState({
    bathA: false,
    bathB: false,
    bathC: false,
    bathD: false,
  })

  const [cleantypes, setcleantypes] = useState({
    regulartype: false,
    endtype: false,
  })

  
  // 11这是checkbox右上角自己属性变化的函数
  const handleChange = (event) => {
    setExtraState({ ...extraState, [event.target.name]: event.target.checked })
    // console.log(event.target.name,':',event.target.checked)
  }
  // 11-----------------------------------------

  // 22这里是点击CardActionArea也会触发checkbox属性变化的函数
  const areaClickChange = (event) => { 
    // console.log(event.target.name,'or',event.target.alt)
    // 点击icon上面，就会有alt属性，点击actionArea上面，就会有name属性  
    const key = event.target.name || event.target.alt
    const newState = !extraState[key]
    setExtraState({...extraState,[key]:newState})
    // console.log(key,extraState)
  }
  // 2/4 bedroom num
  const areaClickChange2 = (event) => { 
    const key = event.target.name || event.target.alt
    const newState = !bedroompick[key]
    setbedroompick({[key]:newState})
    // console.log(key,bedroompick)
  }
  // 3/4 bathroom num
  const areaClickChange3 = (event) => { 
    const key = event.target.name || event.target.alt
    const newState = !bathroompick[key]
    setbathroompick({[key]:newState})
    // console.log(key,bathroompick)
  }

  // 4/4 bathroom num
  const areaClickChange4 = (event) => { 
    const key = event.target.name || event.target.alt
    const newState = !cleantypes[key]
    setcleantypes({[key]:newState})
    // console.log(key,cleantypes)
  }

  let{bedA,bedB,bedC,bedD} = bedroompick
  let{bathA,bathB,bathC,bathD} = bathroompick
  const{regulartype,endtype} = cleantypes
  // 22-----------------------------------------

  // 33这里是判断选中EC还是RC的extra picker部分的效果
  const {extradisable} = extraState // 给下面disable={extradisable}用的，如果选中EC，这个变为true传给下面
  // const type = watch("type","")
  useEffect(()=>{
    // if(type === 'RC') {
    //   setExtraState({oven:false,fridge:false,windows:false,cabinet:false,extradisable:false})
    // }
    // else if(type === 'EC') {
    //   setExtraState({oven:true,fridge:true,windows:true,cabinet:true,extradisable:true}) 
    // }
    if(regulartype) {
      setExtraState({oven:false,fridge:false,windows:false,cabinet:false,extradisable:false})
    }
    else if(endtype) {
      setExtraState({oven:true,fridge:true,windows:true,cabinet:true,extradisable:true}) 
    }
  },[regulartype,endtype])
  // 33-----------------------------------------
 
  // 44判断选中了哪个extra,那个值就为true，返回值给下面onSubmite提交时更改
  const { oven,fridge, windows,cabinet } = extraState
  const anyExtra = () => {
    const list = {ovennum:0,fridgenum:0,interiorWindowsnum:0,cabinetsnum:0}
    if(oven) {
      list.ovennum = 1
    }
    if(fridge){
      list.fridgenum = 1
    }
    if(windows){
      list.interiorWindowsnum = 1
    }
    if(cabinet){
      list.cabinetsnum = 1
    }
    return list
  }
  // 44-----------------------------------------

  const employeeinfoo = JSON.parse(localStorage.getItem('employeeInfo'))
  let disablebooking = false
  if(!regulartype&&!endtype) {
    disablebooking = true
  }
  if(employeeinfoo) {
    disablebooking = true
  }
  if(!bedA && !bedB && !bedC && !bedD) {
    disablebooking = true
  }
  if(!bathA && !bathB && !bathC && !bathD) {
    disablebooking = true
  }
  // 取回home page已填信息localstorage
  const homeOrderData = localStorage.getItem('homeOrderData') ?
  JSON.parse(localStorage.getItem('homeOrderData')) :''
  // console.log(homeOrderData.bedroomNum)
  // let bedroom = ''
  // let bathroom = ''
  let homePostcode = ''
  // let contactNumber = ''
  let propertyType = ''
  if(homeOrderData!=='') {
    // bedroom = homeOrderData.bedroomNum
    // bathroom = homeOrderData.bathroomNum
    if(homeOrderData.bedroomNum === '0'){
      bedA = false
      bedB = false
      bedC = false
      bedD = false
      disablebooking = false
    }
    else if(homeOrderData.bedroomNum === '1'){
      bedA = true
      bedB = false
      bedC = false
      bedD = false
      disablebooking = false
    }
    else if(homeOrderData.bedroomNum === '2'){
      bedA = false
      bedB = true
      bedC = false
      bedD = false
      disablebooking = false
    }
    else if(homeOrderData.bedroomNum === '3'){
      bedA = false
      bedB = false
      bedC = true
      bedD = false
      disablebooking = false
    }
    else if(homeOrderData.bedroomNum === '4'){
      bedA = false
      bedB = false
      bedC = false
      bedD = true
      disablebooking = false
    }

    if(homeOrderData.bathroomNum === '0'){
      bathA = false
      bathB = false
      bathC = false
      bathD = false
      disablebooking = false
    }
    else if(homeOrderData.bathroomNum === '1'){
      bathA = true
      bathB = false
      bathC = false
      bathD = false
      disablebooking = false
    }
    else if(homeOrderData.bathroomNum === '2'){
      bathA = false
      bathB = true
      bathC = false
      bathD = false
      disablebooking = false
    }
    else if(homeOrderData.bathroomNum === '3'){
      bathA = false
      bathB = false
      bathC = true
      bathD = false
      disablebooking = false
    }
    else if(homeOrderData.bathroomNum === '4'){
      bathA = false
      bathB = false
      bathC = false
      bathD = true
      disablebooking = false
    }
 
    

    homePostcode = homeOrderData.postcode
    propertyType = homeOrderData.propertyType
  }

  // 66这里是想左边输入时间，右边实时更新
  let startDate = watch("date",'')
  let startTime = watch("time",'')
  let totalDate = '' // 2021-04-08 00:52

  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
  const yyyy = today.getFullYear()

  // today = `${mm}/${dd}/${yyyy}`
  // console.log(today)
  try {
    startDate = date.format(startDate, 'YYYY-MM-DD') 
    const year = startDate.slice(0,4)

    const mon = startDate.slice(5,7)
    const da = startDate.slice(8,10)
    if(year<=yyyy&&mon<=mm&&da<dd) {
      reset() // 日期不符，重制所有watch
      // console.log('small!!')
      // startDate = `${yyyy}-${mm}-${dd}`
      // console.log(startDate)
    }

  }catch (e) {
  }
  try {
    startTime = date.format(startTime, 'HH:mm') 
    // console.log(startTime)
  }catch(e){
  }
  let haveDate = false
  if(startDate !==null &&startDate !=='' && startTime !==null && startTime !=='') {
    haveDate = true
    // 做成1976-04-19 12:59,在orderRight是1976-04-19T12:59
    totalDate = `${startDate}T${startTime}`
    // console.log(totalDate)
  }
  // 66---------------

  // 77这里是想左边输入房间数，右边实时更新
  // const bedNumber = watch("bedRoomNum",'')
  // const bathNumber = watch("bathRoomNum",'')
  let typeOfClean = watch("type",'') 

  let bedroomNumber = 'Bedrooms x 0'
  let bathroomNumber = 'Bathrooms x 0'
  if(bedA) {
    // bedroomNumber = 0
    bedroomNumber = `Bedrooms x 1`
  }
  else if(bedB) {
    // bedroomNumber = 0
    bedroomNumber = `Bedrooms x 2`
  }
  else if(bedC) {
    // bedroomNumber = 0
    bedroomNumber = `Bedrooms x 3`
  }
  else if(bedD) {
    // bedroomNumber = 0
    bedroomNumber = `Bedrooms x 4`
  }

  if(bathA) {
    // bathroomNumber = 0
    bathroomNumber = `Bathrooms x 1`
  }
  else if(bathB) {
    // bedroomNumber = 0
    bathroomNumber = `Bathrooms x 2`
  }
  else if(bathC) {
    // bedroomNumber = 0
    bathroomNumber = `Bathrooms x 3`
  }
  else if(bathD) {
    // bedroomNumber = 0
    bathroomNumber = `Bathrooms x 4`
  }
  // if(typeOfClean ==='EC') {
  //   typeOfClean = 'End lease clean'
  // }
  // else if(typeOfClean === 'RC') {
  //   typeOfClean = 'Regular clean'
  // }
  // else if(typeOfClean === '') {
  //   typeOfClean = 'Please choose a type.'
  // }
  let picktype = ''
  if(endtype) {
    typeOfClean = 'End lease clean'
    picktype = 'EC'
  }
  else if(regulartype) {
    typeOfClean = 'Regular clean'
    picktype = 'RC'
  }
  else {
    typeOfClean = 'Please choose a type.'
    picktype = ''
  }
 
  // console.log(bedNumber,bathNumber,typeOfClean)
  // 77---------------

  // 88这里是想左边输入地址，右边实时更新
  let address1 = watch("address1","") // 第二个参数为初始值
  let address2 = watch("address2","")
  let suburb = watch("suburb","")
  let postcode = watch("postcode","")
  let totalAddress = 'aaa'
  const addressState = watch("state","")

  if(address2!=="") {
    address2 += ", "
  }else{
    address2="Please input your address."
  }
  if(address1!=="") {
    address1 += ", "
  }
  if(suburb!=="") {
    suburb += ", "
  }
  if(postcode!=="") {
    postcode += ', '
  }
  // {/* Unit 502, 18 Buchan Street, West End, 4101, QLD */}
  totalAddress = `${address2}${address1}${suburb}${postcode}${addressState}`
  // 88-----------------------------------------

  // 99计算右侧总金额
  let amount = 0
  if (typeOfClean === 'End of lease clean') {
    amount = 50 // 初始金额
    amount += Number(bedroomNumber[11]) * 30
    amount += Number(bathroomNumber[12]) * 20
  }else {
    amount = 0
    amount += Number(bedroomNumber[11]) * 30
    amount += Number(bathroomNumber[12]) * 20
    if(oven === true ) {
      amount += 15
    }
    if(fridge === true) {
      amount += 15
    }
    if(windows === true) {
      amount += 15
    }
    if(cabinet === true) {
      amount += 15
    }
  }
  // console.log('一共：',amount)
  // 99

  const payment = useSelector(astate => astate.order.payment)
  // console.log("pay::", payment)

  // 55点击提交按钮后，post请求
  const [orderData, setorderData] = useState('')
  const onSubmit = data => {

    setExtraState({
      ...extraState,
      submit:true
    }) 
    setOpen(true)
    const newdata = {
      extra:{
        oven:anyExtra().ovennum, // 判断是否选了extra，传值给这里
        fridge:anyExtra().fridgenum,
        interiorWindows:anyExtra().interiorWindowsnum,
        cabinets:anyExtra().cabinetsnum,
      },
      otherdata:data,
      bedRoomNum:bedroomNumber[11],
      bathRoomNum:bathroomNumber[12],
      type:picktype
    }
    // console.log(newdata)
    setorderData(newdata)
    // console.log('submit')
  }
    
// // setExtraState({submit:true}) // 更改submit为true，下面即可跳转confirm页面
// 55-----------------------------------------


  // 1010 判断是否正确提交，提交后，用<Redirect /> 跳转页面
  // const loading = useSelector(astate => astate.order.loading)
  // console.log("loading parameter: ", loading)
  // const { submit } = extraState
  const history = useHistory()
  // if (submit && !loading) {
    // return (<Redirect to="/order/pay" />)  // 不太好，附带 3XX状态
    // history.push("/order/confirm")
    // document.location.href = '/order/pay'
  // }
  // 1010

  // 🔥 离开该页面，清除home page 的 local storage 🔥
  window.onbeforeunload = () => {
    localStorage.removeItem('homeOrderData')
    // return '' //没有return的话，离开该页面就不会有弹窗提示
  }

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }
  const handleClose = () => {
    setOpen(false)
  }

  // 上下翻页按钮
  const [nextpage, setnextpage] = useState({
    next1: false,
    next2: true,
    next3:true
  })

  // true 代表不显示
  const nextClick = () => {
    setnextpage({next1:true,next2:false,next3:true})
  }
  const nextClick2 = () => {
    setnextpage({next1:true,next2:true,next3:false})
  }

  const previousClick2 = () => {
    setnextpage({next1:false,next2:true,next3:true})
  }

  const previousClick3 = () => {
    setnextpage({next1:true,next2:false,next3:true})
  }

  const {next1,next2,next3} = nextpage
  return (
    <>
      {employeeinfoo?history.push("/employee-orders"):''}
      <Box className={classes.root}>
        {/* <Box className="background"> */}
        <HeaderNavigation />
        {/* <button type="submit" onClick={test}>test</button> */}
        <Container maxWidth="lg" className={classes.content}>
          <Grid container spacing={0}>

            {/* 1/3 Order Left */}
            <Grid item xs={12} sm={6} className={classes.left}>
              <Box className={classes.top}>
                <Grid container direction="column">          
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Container maxWidth="lg">
                      <Grid item xs={12} sm={12}>
                        <Box>
                          <Box className={next1?"display-none":"display"}>
                            {/* 1/4 Bedroom num */}
                            <Grid container alignItems="flex-end">
                              <Grid item xs={2} sm={2} md={1}>
                                {/* <CreateIcon className={classes.extraIcon} /> */}
                                <KingBedIcon className={classes.extraIcon}  />
                              </Grid>
                              <Grid item xs={10} sm={10} md={11}>
                                <Typography variant='h5'>
                                  How many bedrooms do you have?
                                </Typography>
                              </Grid>
                            </Grid>
                            
                            <Grid container direction="row" spacing={5} className={classes.actionArearoot}>
                              <Grid item xs={6} sm={3}>
                                <Card className={bedA?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                        
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="bedA"
                                      onClick={areaClickChange2}
                                      disabled={homeOrderData!==''&&bedA===false}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={N1} 
                                                alt="bedA"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                  
                                    </CardActionArea>
                          
                                  </Card>
                                </Card>
                              </Grid>
                
                              <Grid item xs={6} sm={3}>
                                <Card className={bedB?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="bedB"
                                      onClick={areaClickChange2}
                                      disabled={homeOrderData!==''&&bedB===false}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={N2} 
                                                alt="bedB"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                  </Card>
                                </Card>
                              </Grid>

                              <Grid item xs={6} sm={3}>
                                <Card className={bedC?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="bedC"
                                      onClick={areaClickChange2}
                                      disabled={homeOrderData!==''&&bedC===false}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={N3} 
                                                alt="bedC"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                  </Card>
                                </Card>
                              </Grid>
      
                              <Grid item xs={6} sm={3}>
                                <Card className={bedD?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="bedD"
                                      onClick={areaClickChange2}
                                      disabled={homeOrderData!==''&&bedD===false}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={N4} 
                                                alt="bedD"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                             
                                  </Card>
                                </Card>     
                              </Grid>
                            </Grid>
                        
                            {/* 2/4 Bathroom num */}
                            <Grid container alignItems="flex-end">
                              <Grid item xs={2} sm={2} md={1}>
                                {/* <CreateIcon className={classes.extraIcon} /> */}
                                <BathtubIcon className={classes.extraIcon} />
                              </Grid>
                              <Grid item xs={10} sm={10} md={11}>
                                <Typography variant='h5'>
                                  How many bathrooms do you have?
                                </Typography>
                              </Grid>
                            </Grid>
                            
                            <Grid container direction="row" spacing={5} className={classes.actionArearoot}>
                              <Grid item xs={6} sm={3}>
                                <Card className={bathA?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                        
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="bathA"
                                      onClick={areaClickChange3}
                                      disabled={homeOrderData!==''&&bathA===false}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={N1} 
                                                alt="bathA"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                  </Card>
                                </Card>
                              </Grid>
                
                              <Grid item xs={6} sm={3}>
                                <Card className={bathB?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="bathB"
                                      onClick={areaClickChange3}
                                      disabled={homeOrderData!==''&&bathB===false}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={N2} 
                                                alt="bathB"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                  </Card>
                                </Card>
                              </Grid>

                              <Grid item xs={6} sm={3}>
                                <Card className={bathC?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="bathC"
                                      onClick={areaClickChange3}
                                      disabled={homeOrderData!==''&&bathC===false}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={N3} 
                                                alt="bathC"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                  </Card>
                                </Card>
                              </Grid>
      
                              <Grid item xs={6} sm={3}>
                                <Card className={bathD?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>

                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="bathD"
                                      onClick={areaClickChange3}
                                      disabled={homeOrderData!==''&&bathD===false}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={N4} 
                                                alt="bathD"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                             
                                  </Card>
                                </Card>     
                              </Grid>
                            </Grid>

                            {/* next previous button */}
                            <Grid container direction="row" justify="space-between" spacing={1}>
                              <Grid item xs={3} sm={3}>
                                {/* <Button onClick={previousClick} type="button" className={buttonstyles.previousButton}>
                                  Previous
                                </Button> */}
                              </Grid>

                              <Grid item xs={2} sm={2}>
                                <Button onClick={nextClick} type="button" className={buttonstyles.nextButton}>
                                  Next
                                </Button>
                              </Grid>
                            </Grid>

                          </Box>

                          <Box className={next2?"display-none":"display"}>
                            {/* 3/4 Clean type */}
                            <Grid container alignItems="flex-end">
                              <Grid item xs={2} sm={2} md={1}>
                                {/* <CreateIcon className={classes.extraIcon} /> */}
                                <HelpIcon className={classes.extraIcon} />
                              </Grid>
                              <Grid item xs={10} sm={10} md={11}>
                                <Typography variant='h5'>
                                  Which kind of clean do you want?
                                </Typography>
                              </Grid>
                            </Grid>
                            
                            <Grid container direction="row" spacing={5} className={classes.actionArearoot}>
                            
                              <Grid item xs={7} sm={4}>
                                <Card className={regulartype?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                        
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="regulartype"
                                      onClick={areaClickChange4}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={regularIcon} 
                                                alt="regulartype"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                    <Typography className={classes.extratxt} variant='h6' align='center'>
                                      Regular
                                    </Typography>
                                  </Card>
                                </Card>
                              </Grid>
                
                              <Grid item xs={7} sm={4}>
                                <Card className={endtype?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea2} 
                                      name="endtype"
                                      onClick={areaClickChange4}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={endleaseIcon} 
                                                alt="endtype"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                    <Typography className={classes.extratxt} variant='h6' align='center'>
                                      End of lease
                                    </Typography>
                                  </Card>
                                </Card>
                              </Grid>

                            </Grid>

                            {/* 4/4 ExtraPicker */}
                            <Grid container alignItems="flex-end">
                              <Grid item xs={2} sm={2} md={1}>
                                <PostAddIcon className={classes.extraIcon} />
                              </Grid>
                              <Grid item xs={10} sm={10} md={11}>
                                <Typography variant='h5'>
                                  Extra service
                                </Typography>
                              </Grid>
                            </Grid>           
                          
                            <Grid container direction="row" spacing={1} className={classes.actionArearoot}>
                              <Grid item xs={6} sm={3}>
                                <Card className={oven?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                        
                                    <CardActionArea
                                      className={classes.actionArea} 
                                      name="oven"
                                      onClick={areaClickChange}
                                      disabled={extradisable}
                                    >

                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid item xs={12} sm={12}>
                                          <Checkbox
                                            color="primary"
                                            checked={oven}
                                            name="oven"
                                            onChange={handleChange}
                                            className={classes.check}
                                          />
                                        </Grid>
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon}
                                                src={ovenIcon}
                                                alt="oven"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                    <Typography className={classes.extratxt} variant='h6' align='center'>
                                      Oven
                                    </Typography>
                                  </Card>
                                </Card>
                              </Grid>
                
                              <Grid item xs={6} sm={3}>
                                <Card className={fridge?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea} 
                                      name="fridge"
                                      onClick={areaClickChange}
                                      disabled={extradisable}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid item xs={12} sm={12}>
                                          <Checkbox
                                            color="primary"
                                            checked={fridge}
                                            name="fridge"
                                            onChange={handleChange}
                                            className={classes.check}
                                          />
                                        </Grid>
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={fridgeIcon} 
                                                alt="fridge"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                    <Typography className={classes.extratxt} variant='h6' align='center'>
                                      Fridge
                                    </Typography>
                                  </Card>
                                </Card>
                              </Grid>

                              <Grid item xs={6} sm={3}>
                                <Card className={windows?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea} 
                                      name="windows"
                                      onClick={areaClickChange}
                                      disabled={extradisable}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid item xs={12} sm={12}>
                                          <Checkbox
                                            color="primary"
                                            checked={windows}
                                            name="windows"
                                            onChange={handleChange}
                                            className={classes.check}
                                          />
                                        </Grid>
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={windowIcon} 
                                                alt="windows"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                    <Typography className={classes.extratxt} variant='h6' align='center'>
                                      Windows
                                    </Typography>
                                  </Card>
                                </Card>
                              </Grid>
      
                              <Grid item xs={6} sm={3}>
                                <Card className={cabinet?classes.pickerBackground:classes.pickernotchoose} elevation={0}>
                                  <Card className={classes.picker} elevation={0}>
                                    <CardActionArea
                                      className={classes.actionArea} 
                                      name="cabinet"
                                      onClick={areaClickChange}
                                      disabled={extradisable}
                                    >
                                      <Grid container direction='column' alignItems="flex-end">
                                        <Grid item xs={12} sm={12}>
                                          <Checkbox
                                            color="primary"
                                            checked={cabinet}
                                            name="cabinet"
                                            onChange={handleChange}
                                            className={classes.check}
                                          />
                                        </Grid>
                                        <Grid
                                          container
                                          justify="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={6} sm={6}>
                                            <Icon>
                                              <img 
                                                className={classes.actionAreaimageIcon} 
                                                src={cabinetIcon} 
                                                alt="cabinet"
                                              />
                                            </Icon>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </CardActionArea>
                                    <Typography className={classes.extratxt} variant='h6' align='center'>
                                      Cabinet
                                    </Typography>
                                  </Card>
                                </Card>     
                              </Grid>
                            </Grid>

                            {/* next previous button */}
                            <Grid container direction="row" justify="space-between" spacing={1}>
                              <Grid item xs={3} sm={3}>
                                <Button onClick={previousClick2} type="button" className={buttonstyles.previousButton}>
                                  Previous
                                </Button>
                              </Grid>

                              <Grid item xs={2} sm={2}>
                                <Button onClick={nextClick2} type="button" className={buttonstyles.nextButton}>
                                  Next
                                </Button>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      </Grid>
                    </Container>


                    {/* <Divider /> */}

                    {/* Service address */}  
                    {/* Picker  */}
                    <Box className={next3?"display-none":"display"}>

                      <Container maxWidth="lg">
                        <Box>
                          <Grid container alignItems="flex-end">
                            <Grid item xs={2} sm={2} md={1}>
                              <CreateIcon className={classes.extraIcon} />
                            </Grid>
                            <Grid item xs={10} sm={10} md={11}>
                              <Typography variant='h5'>
                                Set up your cleaning service
                              </Typography>
                            </Grid>
                          </Grid>
        
                          <Grid container direction="row" spacing={2} className={classes.pickerRoot}>

                            {/* date */}
                            <Grid item xs={12} sm={6}>
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Controller
                                  name="date"
                                  control={control}
                                // initialFocusedDate={datetime || null}
                                // defaultValue={datetime || null} 
                                  initialFocusedDate={null} // 初始化没有日期
                                  defaultValue={null} // 初始化没有日期
                                  render={({ ref, ...rest }) => (
                                    <KeyboardDatePicker
                                      className={cssstyle.datePicker}
                                      format="MM/dd/yyyy"
                                      label='Date'
                                      required
                                      // shouldDisableDate={()=>'2020-4-12'}
                                      helperText="" // 关闭报错文字，会挤开下面样子
                                      disablePast // 禁用过去日期
                                      KeyboardButtonProps={{"aria-label": "change date"}}
                                      keyboardIcon={(<DateRangeIcon />)} // 重新定义右侧icon
                                      {...rest}
                                    />
                                )}
                                />
                              </MuiPickersUtilsProvider>
                            </Grid>

                            {/* time */}
                            <Grid item xs={12} sm={6}>
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Controller
                                  name="time"
                                  control={control}
                                  initialFocusedDate={null} // 初始化没有日期
                                  defaultValue={null} // 初始化没有日期
                                  render={({ ref, ...rest }) => (
                                    <KeyboardTimePicker
                                      className={cssstyle.datePicker}
                                      label='Time'
                                      required
                                      helperText="" // 关闭报错文字，会挤开下面样子
                                      KeyboardButtonProps={{'aria-label': 'change time',}}
                                      keyboardIcon={(<AccessTimeIcon />)} // 重新定义右侧icon
                                      {...rest}
                                    />
                                )}
                                />
                              </MuiPickersUtilsProvider>
                            </Grid>
                                                       
                            {/* roomTpye */}
                            <Grid item xs={12} sm={6}>
                              <FormControl className={cssstyle.Picker}>
                                <InputLabel className={cssstyle.Picker}>
                                  Property type
                                </InputLabel>

                                <Controller
                                  as={(
                                    <Select MenuProps={SelectStyle}>
                                      <MenuItem className={classes.selected} value="unit">Unit</MenuItem>
                                      <MenuItem className={classes.selected} value="apartment">Apartment</MenuItem>
                                      <MenuItem className={classes.selected} value="house">House</MenuItem>
                                    </Select>
                                )}
                                  name="propertyType"
                                // required
                                // disabled={!!homeOrderData} // {homeOrderData?true:false}
                                  control={control}
                                  defaultValue={propertyType}
                                />
                              </FormControl>
                            </Grid>
                          
                          </Grid>
                        </Box>
                        
                        <Grid container alignItems="flex-end">
                          {/* home icon */}
                          <Grid item xs={2} sm={2} md={1}>
                            <HomeIcon className={classes.extraIcon} />
                          </Grid>
                          {/* title  */}
                          <Grid item xs={10} sm={10} md={11}>
                            <Typography variant='h5'>
                              Service address
                            </Typography>
                          </Grid>
                          {/* Input box */}
                          <Grid item xs={12} sm={12}>
                            <Box className={classes.inputRoot}>
                              <Grid container direction="row" spacing={2}>
                                {/* First Name */}
                                <Grid item xs={6} sm={6}>
                                  <Controller
                                    as={(
                                      <TextField
                                        id=""
                                        label="First Name"
                                        required
                                    // label在输入框顶部固定
                                        InputLabelProps={{ shrink: true,}}
                                        variant="outlined"
                                        className={classes.input}
                                      />
                        )}
                                    name="firstName"
                                    control={control}
                                    defaultValue=""
                                  />
                                </Grid>
                                {/* Last Name */}
                                <Grid item xs={6} sm={6}>
                                  <Controller
                                    as={(
                                      <TextField
                                        id=""
                                        label="Last Name"
                                        required
                                        InputLabelProps={{shrink: true}}
                                        variant="outlined"
                                        className={classes.input}
                                      />
                        )}
                                    name="lastName"
                                    control={control}
                                    defaultValue=""
                                  />
                
                                </Grid>
                              </Grid>

                              <Grid container direction="row" spacing={2}>
                                {/* Address1 */}
                                <Grid item xs={6} sm={6}>
                                  <Controller
                                    as={(
                                      <TextField
                                        id=""
                                        label="Street Address"
                                        required
                                        InputLabelProps={{shrink: true,}}
                                        variant="outlined"
                                        className={classes.input}
                                      />
                        )}
                                    name="address1"
                                    control={control}
                                    defaultValue=""
                                  />
                                </Grid>
                                {/* Address2(APT) */}
                                <Grid item xs={6} sm={6}>
                                  <Controller
                                    as={(
                                      <TextField
                                        id=""
                                        label="Apt # (optional)"
                                        InputLabelProps={{shrink: true,}}
                                        variant="outlined"
                                        className={classes.input}
                                      />
                        )}
                                    name="address2"
                                    control={control}
                                    defaultValue=""
                                  />
                                </Grid>
                              </Grid>
      
                              <Grid container direction="row" spacing={2}>
                                {/* Suburb */}
                                <Grid item xs={6} sm={6}>
                                  <Controller
                                    as={(
                                      <TextField
                                        id=""
                                        label="Suburb"
                                        required
                                        InputLabelProps={{shrink: true,}}
                                        variant="outlined"
                                        className={classes.input}
                                      />
                        )}
                                    name="suburb"
                                    control={control}
                                    defaultValue=""
                                  />
                                </Grid>
                                {/* State */}
                                <Grid item xs={6} sm={6}>
                                  <Controller
                                    as={(
                                      <TextField
                                        id=""
                                        label="State"
                                        required
                                        InputLabelProps={{ shrink: true,}}
                                        variant="outlined"
                                        className={classes.input}
                                      />
                        )}
                                    name="state"
                                    control={control}
                                    defaultValue=""
                                  />
                                </Grid>
                              </Grid>

                              <Grid container direction="row" spacing={2}>
                                {/* contact number */}
                                <Grid item xs={6} sm={6}>
                                  <Controller
                                    as={(
                                      <TextField
                                        id=""
                                        label="Contact Number"
                                        required
                                        InputLabelProps={{shrink: true,}}
                                        variant="outlined"
                                        className={classes.input}
                                      />
                        )}
                                    name="phoneNumber"
                                    control={control}
                                    defaultValue=''
                                  />
                                </Grid>
                      
                                {/* 空白 占位 */}
                                {/* <Grid item xs={6} sm={6} /> */}

                                {/* Postcode */}
                                <Grid item xs={6} sm={6}>
                                  <Controller
                                    as={(
                                      <TextField
                                        id=""
                                        label="Post Code"
                                        required
                                        InputLabelProps={{shrink: true,}}
                                        variant="outlined"
                                        className={classes.input}
                                      />
                        )}
                                    name="postcode"
                                    control={control}
                                    defaultValue={homePostcode}
                                  />
                                </Grid>

                              </Grid>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>

                      {/* <Divider /> */}
                  
                      <Container maxWidth="lg" className={classes.bookingButton}>
                        {/* next previous button */}
                        <Grid container direction="row" justify="space-between" spacing={1}>
                          <Grid item xs={3} sm={3}>
                            <Button onClick={previousClick3} type="button" className={buttonstyles.previousButton}>
                              Previous
                            </Button>
                          </Grid>

                          <Grid item xs={2} sm={5}>
                            <ScrollTop {...props}>
                              <Button 
                        // disabled
                        // href='/order/confirm'
                                type="submit"
                                className={buttonstyles.finalBookingButton}
                          // disabled={!!employeeinfoo}
                                disabled={disablebooking}
                              >
                                Complete Booking
                                {/* Pay Now */}
                              </Button>
                            </ScrollTop>
                          </Grid>
                        </Grid>
                      
                      </Container>
                    </Box>
                  </form>
                  
                  {/* Payment */}
                  {/* <Container maxWidth="lg">
                    <Grid container alignItems="flex-end">
                      <CheckoutForm />
                    </Grid>
                  </Container> */}
                </Grid>
              </Box>
            </Grid>
          
            {/* 2/3 这是中间的灰色间隔 */}
            <Grid item xs={12} sm={1} />
          
            {/* 3/3 Order Right */}
            <Grid item xs={12} sm={5} className={classes.right}>
              <Box className={classes.rightTop}>
                <Container maxWidth="lg" className={classes.details}>
                  <Grid container direction="column" spacing={1}>
                    {/* <Container maxWidth="sm"> */}
                    
                    {/* 1/5Bedroom number */}
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row">
                        <Grid item xs={1} sm={1}>
                          <Grid container justify="center">
                            <KingBedIcon fontSize="large" className={classes.icon}  />
                          </Grid>
                        </Grid>
                        <Grid item xs={11} sm={11}>
                          <Typography variant='h6' className={classes.text}>
                            {/* {bedroomNumber} */}
                            {/* {(homeOrderData)&&(`Bedrooms x ${bedroom}`)}
                            {(!homeOrderData)&&(bedroomNumber)} */}
                            {bedroomNumber}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* 2/5 Bathroom number */}
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row">
                        <Grid item xs={1} sm={1}>
                          <Grid container justify="center">
                            <BathtubIcon fontSize="large" className={classes.icon} />
                          </Grid>
                        </Grid>
                        <Grid item xs={11} sm={11}>
                          <Typography variant='h6' className={classes.text}>
                            {bathroomNumber}
                            {/* {(homeOrderData)&&(`Bathrooms x ${bathroom}`)}
                            {(!homeOrderData)&&(bathroomNumber)} */}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* 3/5 type of clean */}
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row">
                        <Grid item xs={1} sm={1}>
                          <Grid container justify="center">
                            <NoteIcon fontSize="large" className={classes.icon} />
                          </Grid>
                        </Grid>
                        <Grid item xs={11} sm={11} className={classes.text}>
                          <Typography variant='h6'>{typeOfClean}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    
                    {/* 4/5 time info */}  
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row">
                        <Grid item xs={1} sm={1}>
                          <Grid container justify="center">
                            <CalendarTodayIcon fontSize="large" className={classes.icon} />
                          </Grid>
                        </Grid>
                        <Grid item xs={11} sm={11}>
                          {/* 12:00PM, Friday, 29 Jan 2021 */}
                          {/* <Typography variant='h6'>{totalDate}</Typography> */}
                          {haveDate? (
                            <Typography variant='h6' className={classes.text}>
                              <Moment format="dddd HH:mm, DD MMM YYYY">{totalDate}</Moment>
                            </Typography>
                        )
                          :(
                            <Typography variant='h6' className={classes.text}>
                              Please choose a date.
                            </Typography>
)}
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* 5/5 address info */}
                    <Grid item xs={12} sm={12}>
                      <Grid container direction="row">
                        <Grid item xs={1} sm={1}>
                          <Grid container justify="center">
                            <RoomIcon fontSize="large" className={classes.icon} />
                          </Grid>
                        </Grid>
                        <Grid item xs={11} sm={11}>
                          <Typography variant='h6' className={classes.text}>
                            {totalAddress}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>                    
                    {/* </Container> */}
                  </Grid>
                </Container>

                <Divider />

                {/* Total amount */}
                <Container maxWidth="lg">
                  <Grid container direction="row" alignItems="flex-end" className={classes.priceArea}>
                    <Grid item xs={6} sm={6}>
                      <Typography align="left" variant='h4'>
                        Total
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography align="right" variant='h4' className={classes.price}>
                        $
                        {amount}
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>         
        <Footer />


        <Dialog className={classes.dialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <Container>
            <DialogTitle
              id="form-dialog-title" 
              style={{ 
                textAlign: 'center',
                color: '#007bf5'
              }}
            >
              Total amount:  $
              {amount}
            </DialogTitle>
     
            <DialogContentText>
              {/* Success: 4000000360000006 Faild: 4000000000000002  */}
              {/* <br />
              3D Identify:4000002760003184 */}
            </DialogContentText>
          </Container>
          
          <Container>
            <Elements stripe={promise}>
              <CheckoutForm price={amount} paystatus={payment} data={orderData} />
            </Elements>
          </Container>
        </Dialog>
      </Box>
    </>
  )
}

export default Order
