/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useForm,Controller } from "react-hook-form"
import Grid from '@material-ui/core/Grid'
import { Container , Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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
// import DateRangeIcon from '@material-ui/icons/DateRange'
// import date from 'date-and-time'
import {useHistory} from "react-router-dom"
// import {useDispatch} from 'react-redux'
// import {postRegularRequest} from '../../../store/actions'

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

  // const onErrors = () => {
  //   console.log("ERROR!")
  // }

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

            {/* 3. Type */}
            {/* <Grid item xs={12} md={2}>
              <FormControl className={cssstyle.Picker}>
                <InputLabel className={cssstyle.Picker}>
                  Clean Type
                </InputLabel>

                <Controller
                  as={(
                    <Select MenuProps={SelectStyle}>
                      <MenuItem value="RC">Regular</MenuItem>
                      <MenuItem value="EC">End of lease</MenuItem>
                    </Select>
                )}
                  name="type"
                  required
                  control={control}
                  defaultValue=""
                />
              </FormControl>
            </Grid> */}
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
            
            {/* 5. Contact number */}
            {/* <Grid item xs={12} md={2}>
              <FormControl className={cssstyle.Picker}>
                <Controller
                  as={(
                    <TextField label="Contact Number" className={classes.postCodeLength} />
                )}
                  name="number"
                  // required
                  control={control}
                  defaultValue=""
                />
              </FormControl>
            </Grid> */}
            {/* 5. Date */}
            {/* <Grid item xs={12} md={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  name="date"
                  control={control}
                  initialFocusedDate={null} // 初始化没有日期
                  defaultValue={null} // 初始化没有日期
                  render={({ ref, ...rest }) => (
                    <KeyboardDatePicker
                      className={cssstyle.datePicker}
                      format="MM/dd/yyyy"
                      label='Date'
                      required
                      helperText="" // 关闭报错文字，会挤开下面样子
                      disablePast // 禁用过去日期
                      KeyboardButtonProps={{"aria-label": "change date"}}
                      keyboardIcon={(<DateRangeIcon />)} // 重新定义右侧icon
                      {...rest}
                    />
                  )}
                />
              </MuiPickersUtilsProvider>
            </Grid> */}
            {/* 6.Time */}
            {/* <Grid item xs={12} md={2}>
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
            </Grid>             */}
          </Grid>

          <Box className={classes.buttonPosition}>
            <Button
              className={buttonstyle.bookingButton}
              variant="contained"
              type="submit"
              id="back-to-top-anchor"
              // href="/order" // 跳转到order page
            >
              Booking from $80
            </Button>
          </Box>

        </form>
      </Container>
    </Box>
)}