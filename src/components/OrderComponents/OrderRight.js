import React from "react"
// import {useSelector} from 'react-redux'
// import { Redirect } from "react-router-dom" // 负责页面跳转router，不会刷新reducer👍
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
// import LoadingIcon from "../AdminComponents/LoadingIcon"
// import {getENDRequest,getREGULARRequest} from "../../store/actions"


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

  // totalText: {
  //   paddingTop: '10px',
  // },

  rightTop: {
    marginBottom: '30px',
    marginTop: '30px',
  }
}))

export default function OrderRight({data}) {
  const classes = useStyles()
  const showForm = false // 测试，没啥用

  // 1/1get order  from mongoDB
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getREGULARRequest())
  //   dispatch(getENDRequest())
  // },[])
  // const test1 = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  
  // console.log("test: get regular order: ",test1)

  // const test2 = useSelector(state => state.endoflease_in_reducer_index.repos_in_reducer_init)  
  // console.log("test: get end of lease order: ",test2)
  // -------------


  // 1/4 直接从regular reducer取值回来
  // const loadingNumREGdata = useSelector(state => state.regular_in_reducer_index.loadingNum)  
  // const REGdata = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  
  // console.log('regular redex method: ',REGdata)

  // 2/4 直接从end reducer取值回来
  // const loadingNumENDdata = useSelector(state => state.endoflease_in_reducer_index.loadingNum)  
  // const ENDdata = useSelector(state => state.endoflease_in_reducer_index.repos_in_reducer_init)  
  // console.log('end redex method: ',ENDdata)

  // // 3/4 从 regular localstorage取值回来
  // const data1 = useSelector(state => state.regular_in_reducer_index.completeinfo.info)  
  // console.log("regular by local Storage : ",data1)
  // // 4/4 从 endlease localstorage取值回来
  // const data2 = useSelector(state => state.endoflease_in_reducer_index.completeinfo.info)  
  // console.log("end by local Storage : ",data2)
  
  // // 如果直接进入这个页面，会一直加载转圈,不过现在在confirmPage会判断，所以不会走到这里
  // if (loadingNumREGdata!==2 && loadingNumENDdata!==2) {
  //   return <LoadingIcon />
  // } 


  // 处理取回的数据部分
  let {bedroomNum} = data
  let {bathroomNum} = data
  if(bedroomNum !== '') {
    bedroomNum = `Bedrooms x ${bedroomNum}`
  }
  if(bathroomNum !== '') {
    bathroomNum = `Bathrooms x ${bathroomNum}`
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
  let {type} = data
  if(type === 'RC') {
    type = 'Regular Clean'
  }
  else if(type === 'EC') {
    type = 'End of lease Clean'
  }
  
  // 🔥 离开该页面，清除local storage 🔥
  window.onbeforeunload = () => {
    localStorage.removeItem('homeOrderData')
    localStorage.removeItem('regularCleanOrder')
    localStorage.removeItem('endofleaseCleanOrder')
  //   // return '' //没有return的话，离开该页面就不会有弹窗提示
  }

  return (
    <>
      <Box className={classes.rightTop}>
        <Container maxWidth="lg">
          <Grid container direction="column">
            {/* <Container maxWidth="sm"> */}
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
            {/* </Container> */}
          </Grid>
        </Container>
        <Divider />
        <Container maxWidth="lg">
          <Grid container direction="row" alignItems="flex-end">
            <Grid item xs={6} sm={6}>
              <Typography align="left" variant='h3'>
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
      {/* )} */}
    </>
  )
}
