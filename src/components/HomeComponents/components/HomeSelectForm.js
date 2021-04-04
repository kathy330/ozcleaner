/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { useForm,Controller } from "react-hook-form"
import Grid from '@material-ui/core/Grid'
import { Container , Box } from '@material-ui/core'
import { makeStyles,useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
// import DateFnsUtils from '@date-io/date-fns'
// import {MuiPickersUtilsProvider,KeyboardDatePicker,KeyboardTimePicker} 
// from "@material-ui/pickers"
// import AccessTimeIcon from '@material-ui/icons/AccessTime'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Dialog from '@material-ui/core/Dialog'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import SwipeableViews from 'react-swipeable-views'
// import DateRangeIcon from '@material-ui/icons/DateRange'
// import date from 'date-and-time'
import {useHistory} from "react-router-dom"
// import {useDispatch} from 'react-redux'
// import {postRegularRequest} from '../../../store/actions'
import LoginDetails from '../../SignUpComponents/LoginForm'
import EmployeeLoginDetails from '../../SignUpComponents/EmployeeLoginForm'

import {buttonStyle} from '../../../styles/styles'
import HomeComponentStyle from '../styles/HomeComponentStyle'
// 官方文档diy的方式在TimePicker,style/HomeComponentStyle.js里有三种
// scss Module/material style的引用方法 className={styles.position}
// material的本页面设置diy的引用方法 style={diyStyle.button}


const useStyles = makeStyles((theme) => ({
  pickerPosition: {
    paddingTop: '4vh'
    // [theme.breakpoints.down('sm')]: {
    //   paddingTop: '2vh',
    // },
    // [theme.breakpoints.between('sm','md')]: {
    //   paddingTop: '2vh',
    // },
    // [theme.breakpoints.up('md')]: {
    //   paddingTop: '2vh',
    // }
  },

  buttonPosition: {
    // paddingTop: '8vh',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '15vh',
    },
    [theme.breakpoints.between('sm','md')]: {
      paddingTop: '15vh',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '10vh',
    }
  },

}))

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}


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
}



export default function HomeSelectForm() {
  const classes = useStyles()
  const cssstyle = HomeComponentStyle()
  const buttonstyle = buttonStyle()
  const {  handleSubmit,control } = useForm()
  // const dispatch = useDispatch()

  // 1/1开始登陆窗口函数：
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(0)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChangeIndex = (index) => {
    setValue(index)
  }
  // 1/1结束登陆窗口函数：


  // 首页处理order data存储到local sotrage
  const history = useHistory()
  const onSubmit = data => {
    // console.log(data)
    // if(data.bedRoomNum!=="" && data.bathRoomNum!=="" && data.type!==""
    //     &&data.postcode!=="" &&data.date!=="" &&data.time!==0) {
      // 防止有人不选时间
      // const pickDate = date.format(data.date, 'YYYY-MM-DD') 
      // const pickTime = date.format(data.time, 'HH:mm:ss') 
      // const totalDate = `${pickDate}T${pickTime}Z`
  
      const newData = {
        // ...postData,
        bedroomNum:data.bedRoomNum,
        bathroomNum:data.bathRoomNum,
        contact:data.number,
        propertyType:data.propertyType,
        // type:data.type,
        // address:{
          // ...postData.address,
        postcode:data.postcode,
        // },
        // startTime:totalDate,
        // starDate:data.date,
        // starTime:data.time,
        // totalDate:totalDate
        // endTime:totalDate, // endtime 什么时候设置？     
      }
      // console.log(newData)
      localStorage.setItem('homeOrderData',JSON.stringify(newData)) 
      history.push("/order")

      // 🌟dispatch一个action
      // dispatch(postRegularRequest(newData)) // 发送saga请求
    // }
    // else{
    //   console.log('Must pick all the info')
    // }
  } 

  return ( 
    <Box>
      <Container maxWidth="lg" className={classes.pickerPosition}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* 1. Bedroom */}
            <Grid item xs={12} md={3}>
              <FormControl className={cssstyle.Picker}>
                <InputLabel className={cssstyle.Picker}>
                  Bedroom *
                </InputLabel>

                <Controller
                  as={(
                    <Select MenuProps={SelectStyle}>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                    </Select>
                )}
                  name="bedRoomNum"
                  required
                  control={control}
                  defaultValue=""
                />
              </FormControl>
            </Grid> 

            {/* 2. Bathroom */}
            <Grid item xs={12} md={3}>
              <FormControl className={cssstyle.Picker}>
                <InputLabel className={cssstyle.Picker}>
                  Bathroom *
                </InputLabel>

                <Controller
                  as={(
                    <Select MenuProps={SelectStyle}>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                    </Select>
                )}
                  name="bathRoomNum"
                  required
                  control={control}
                  defaultValue=""
                />
              </FormControl>
            </Grid>

            {/* . property type */}
            <Grid item xs={12} md={3}>
              <FormControl className={cssstyle.Picker}>
                <InputLabel className={cssstyle.Picker}>
                  Property Type
                </InputLabel>

                <Controller
                  as={(
                    <Select MenuProps={SelectStyle}>
                      <MenuItem value="unit">Unit</MenuItem>
                      <MenuItem value="apartment">Apartment</MenuItem>
                      <MenuItem value="house">House</MenuItem>
                                  
                    </Select>
                )}
                  name="propertyType"
                  // required
                  control={control}
                  defaultValue=''
                />
              </FormControl>
            </Grid>

            {/* 4. PostCode */}
            <Grid item xs={12} md={3}>
              <FormControl className={cssstyle.Picker}>
                <Controller
                  as={(
                    <TextField label="Post Code" className={classes.postCodeLength} />
                )}
                  name="postcode"
                  // required
                  control={control}
                  defaultValue=""
                />
              </FormControl>
            </Grid>
          </Grid>

          <Box className={classes.buttonPosition}>
            {/* 如果没有authLevel，弹出登陆，如果有，正常下单按钮submit属性 */}
            {localStorage.getItem('authLevel')? (
              <Button
                className={buttonstyle.bookingButton}
                variant="contained"
                type="submit"
                id="back-to-top-anchor"
                // href="/order" // 跳转到order page
              >
                Booking from $80
              </Button>
          ) : (
            <Button
              className={buttonstyle.bookingButton}
              variant="contained"
              // type="submit"
              id="back-to-top-anchor"
              onClick={handleClickOpen}
            >
              Booking from $80
            </Button>
          )}
          </Box>


          {/* 登陆弹窗样式 */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth='xs'
          >
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Login as customer" {...a11yProps(0)} />
                  <Tab label="Login as employee" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <LoginDetails />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <EmployeeLoginDetails />
                </TabPanel>
              </SwipeableViews>
            </div>
          </Dialog>

        </form>
      </Container>
    </Box>
)}