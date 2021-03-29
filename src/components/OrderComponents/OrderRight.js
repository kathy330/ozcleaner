import React, {useEffect} from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import KingBedIcon from '@material-ui/icons/KingBed'
import BathtubIcon from '@material-ui/icons/Bathtub'
import RoomIcon from '@material-ui/icons/Room'
import NoteIcon from '@material-ui/icons/Note'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import IconButton from '@material-ui/core/IconButton'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import Divider from '@material-ui/core/Divider'
// import date from 'date-and-time'
import Moment from 'react-moment'
// import { useForm } from "react-hook-form"
import {useSelector,useDispatch} from 'react-redux'
import {getENDRequest,getREGULARRequest} from "../../store/actions"


// 🔥local storage用法：(sessionStorage也可以用)
// 1/4setter
// localStorage.setItem('myData', data);
// 2/4getter
// localStorage.getItem('myData');
// 3/4remove
// localStorage.removeItem('myData');
// 4/4remove all
// localStorage.clear();


const useStyles = makeStyles(() => ({
  icon: {
    color: '#707070',
  },

  hover: {
    padding: 0,
  },

  price: {
    color: '#007bf5',
  },

  totalText: {
    paddingTop: '10px',
  },

  rightTop: {
    marginBottom: '30px',
    marginTop: '30px',
  }
}))

export default function OrderRight() {
  const classes = useStyles()
  const showForm = false // 测试，没啥用

  // const testdata = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  
  // console.log('aa',testdata)

  // test get order method from mongoDB
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getREGULARRequest())
    dispatch(getENDRequest())
  },[])
  const test1 = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  
  console.log("test: get regular order: ",test1)

  const test2 = useSelector(state => state.endoflease_in_reducer_index.repos_in_reducer_init)  
  console.log("test: get end of lease order: ",test2)
  // -----测试结束----


  // 从localstorage取值回来
  const data1 = useSelector(state => state.regular_in_reducer_index.completeinfo.info)  
  console.log("Get by local Storage regular: ",data1)

  const data2 = useSelector(state => state.endoflease_in_reducer_index.completeinfo.info)  
  console.log("By local Storage endoflease: ",data2)
  
  // 初始化空data，否则下面报错
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
  // 判断用哪个的local storage
  if(data1.type==='RC' && data2.type ==='') {
    data = data1
  }
  else if(data2.type==='EC' && data1.type ==='') {
    data = data2
  }

  let {bedroomNum} = data
  let {bathroomNum} = data
  if(bedroomNum !== '') {
    bedroomNum = `Bedrooms x ${bedroomNum}`
  }
  if(bathroomNum !== '') {
    bathroomNum = `Bathrooms x ${bathroomNum}`
  }

  let {type} = data
  if(type==='RC'){
    type = "Regular clean"
  }
  if(type==='EC'){
    type = 'End of lease clean'
  }

  let {address:{address2}} = data
  let {address:{address1}} = data
  let {address:{suburb}} = data
  let {address:{state}} = data
  let {address:{postcode}} = data

  if(address2 !== null && address2 !== ''){
    address2 = `${address2}, `
  }
  if(address1!== null && address1 !== ''){
    address1 = `${address1}, `
  }
  if(suburb!== null && suburb !== ''){
    suburb = `${suburb}, `
  }
  if(postcode!== null && postcode !== ''){
    postcode = `${postcode}, `
  }
  if(state!== null && state !== ''){
    state = `${state}`
  }
  const totalAddress = `${address2}${address1}${suburb}${postcode}${state}`

  let {startTime} = data // 做成1976-04-19T12:59,在orderpage是1976-04-19 12:59
  let timeDisplay = false
  if(startTime !== null && startTime !== '') {
    startTime = startTime.split(':',3)
    startTime = `${startTime[0]}:${startTime[1]}`
  }else {
    timeDisplay = true
  }
  const {price} = data

  // 🔥 离开该页面，清除local storage 🔥
  window.onbeforeunload = () => {
    localStorage.removeItem('regularCleanOrder')
    localStorage.removeItem('endofleaseCleanOrder')
    // return '' //没有return的话，离开该页面就不会有弹窗提示
  }

  return (
    <Box className={classes.rightTop}>
      <Container maxWidth="lg">
        <Grid container direction="column">
          <Container maxWidth="sm">
            <Grid item xs={12} sm={12}>
              <Grid container direction="row">
                <Grid item xs={2} sm={2}>
                  {/* <KingBedIcon fontSize="large" className={classes.icon}  /> */}
                  <IconButton className={classes.hover}>
                    {!showForm ?
                      <KingBedIcon fontSize="large" className={classes.icon} />
                      : <IndeterminateCheckBoxIcon />}
                  </IconButton>
                </Grid>
                <Grid item xs={10} sm={10}>
                  <Typography variant='h6'>     
                    {bedroomNum}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid container direction="row">
                <Grid item xs={2} sm={2}>
                  <BathtubIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={10} sm={10}>
                  <Typography variant='h6'>
                    {bathroomNum}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid container direction="row">
                <Grid item xs={2} sm={2}>
                  <NoteIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={10} sm={10}>
                  <Typography variant='h6'>{type}</Typography>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} sm={12}>
              <Grid container direction="row">
                <Grid item xs={2} sm={2}>
                  <RoomIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={10} sm={10}>
                  <Typography variant='h6'>
                    {/* Unit 502, 18 Buchan Street, West End, 4101, QLD */}
                    {totalAddress}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} sm={12}>
              <Grid container direction="row">
                <Grid item xs={2} sm={2}>
                  <CalendarTodayIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={10} sm={10}>
                  <Hidden xsUp={timeDisplay}>
                    <Typography variant='h6'>
                      {/* 12:00PM, Friday, 29 Jan 2021 */}
                      <Moment format="dddd HH:mm, DD MMM YYYY">{startTime}</Moment>
                    </Typography>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Container>
      <Divider />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6} sm={6}>
            <Typography align="left" variant='h4' className={classes.totalText}>
              Total
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography align="right" variant='h3' className={classes.price}>
              $
              {price}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
