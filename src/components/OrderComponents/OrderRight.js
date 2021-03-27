import React from "react"
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
import {useSelector} from 'react-redux'


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

  const data = useSelector(state => state.regular_in_reducer_index.completeinfo.info)  
  console.log("By local Storage: ",data)

  
  let {bedroomNum} = data
  let {bathroomNum} = data
  if(bedroomNum === ''){
    bedroomNum = ''
  }
  if(bedroomNum !== '') {
    bedroomNum = `Bedrooms x ${bedroomNum}`
  }
  if(bathroomNum === ''){
    bathroomNum = ''
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
    // startTime = ''
    timeDisplay = true
  }
  const {price} = data

  // 🔥 离开该页面，清除local storage 🔥
  window.onbeforeunload = () => {
    localStorage.removeItem('regularCleanOrder')
    // return '' //没有return的话，离开该页面就不会有弹窗提示
  }

  // const dispatch = useDispatch()
  // // lifeStyle 初始渲染,一般取数据用useEffect()
  // useEffect(()=>{
  //   dispatch(getREGULARRequest())
  // },[])

  // // regular_in_reducer_index. 是Reducer里面的index.js定义的名字
  // // .repos_in_reducer_init 是Reducer里面的init值的名字
  // // 🌟取数据
  // const repo = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  
  // console.log("init reducer info: ",repo)

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
