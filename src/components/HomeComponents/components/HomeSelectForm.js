/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useForm,Controller } from "react-hook-form"
import Grid from '@material-ui/core/Grid'
import { Container , Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider,KeyboardDatePicker,KeyboardTimePicker} from "@material-ui/pickers"
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import DateRangeIcon from '@material-ui/icons/DateRange'
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
      paddingTop: '5vh',
    },
    [theme.breakpoints.between('sm','md')]: {
      paddingTop: '10vh',
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
  
  const onSubmit = data => {
    console.log(data)
  } 

  const onErrors = () => {
    console.log("ERROR!")
  }

  return ( 
    <Box>
      <Container maxWidth="lg" className={classes.pickerPosition}>
        <form onSubmit={handleSubmit(onSubmit,onErrors)}>
          <Grid container spacing={1}>
            {/* 1. Bedroom */}
            <Grid item xs={12} md={2}>
              <FormControl className={cssstyle.Picker}>
                <InputLabel className={cssstyle.Picker}>
                  Bedroom
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
                  control={control}
                />
              </FormControl>
            </Grid> 
            {/* 2. Bathroom */}
            <Grid item xs={12} md={2}>
              <FormControl className={cssstyle.Picker}>
                <InputLabel className={cssstyle.Picker}>
                  Bathroom
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
                  control={control}
                />
              </FormControl>
            </Grid>
            {/* 3. Type */}
            <Grid item xs={12} md={2}>
              <FormControl className={cssstyle.Picker}>
                <InputLabel className={cssstyle.Picker}>
                  Type
                </InputLabel>

                <Controller
                  as={(
                    <Select MenuProps={SelectStyle}>
                      <MenuItem value="RC">Regular</MenuItem>
                      <MenuItem value="EC">End of lease</MenuItem>
                    </Select>
                )}
                  name="type"
                  control={control}
                />
              </FormControl>
            </Grid>
            {/* 4. PostCode */}
            <Grid item xs={12} md={2}>
              <FormControl className={cssstyle.Picker}>
                <Controller
                  as={(
                    <TextField label="Post Code" className={classes.postCodeLength} />
                )}
                  name="postcode"
                  control={control}
                />
              </FormControl>
            </Grid>
            {/* 5. Date */}
            <Grid item xs={12} md={2}>
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
            {/* 6.Time */}
            <Grid item xs={12} md={2}>
              <MuiPickersUtilsProvider
                utils={DateFnsUtils}
                
              >
                <Controller
                  name="time"
                  control={control}
                  initialFocusedDate={null} // 初始化没有日期
                  defaultValue={null} // 初始化没有日期
                  render={({ ref, ...rest }) => (
                    <KeyboardTimePicker
                      className={cssstyle.datePicker}
                      label='Time'
                      helperText="" // 关闭报错文字，会挤开下面样子
                      KeyboardButtonProps={{'aria-label': 'change time',}}
                      keyboardIcon={(<AccessTimeIcon />)} // 重新定义右侧icon
                      {...rest}
                    />
                  )}
                />
              </MuiPickersUtilsProvider>
            </Grid>            
          </Grid>

          <Box className={classes.buttonPosition}>
            <Button
              className={buttonstyle.bookingButton}
              variant="contained"
              type="submit"
              id="back-to-top-anchor"
              // href="/order" //跳转到order page
            >
              Booking from $80
            </Button>
          </Box>

        </form>
      </Container>
    </Box>
)}

// import IconButton from '@material-ui/core/IconButton'
// import BedroomPicker from './BedroomPicker'
// import BathroomPicker from './BathroomPicker'
// import TypePicker from './TypePicker'
// import DatePicker from "./DatePicker"
// import TimePicker from "./TimePicker"
// import InsertPostcode from "./PostcodeInput"
// import HomeButton from './HomeButton'
        // {/* <BedroomPicker /> */}
        // {/* <BathroomPicker /> */}
        // {/* <TypePicker /> */}
        // {/* <InsertPostcode /> */}
        // {/* <DatePicker /> */}
        // {/* <TimePicker /> */}
// class HomeSelectForm extends React.Component {
  
//   constructor(){
//     super()
//     this.state={
//       bedRoomNum:'',
//       bathRoomNum:'',
//       type:'',
//       date:'',
//       StartTime:'',
//       Postcode:'',
//     }
//   }

//   submitHandler = (e) => {
//     e.preventDefault()
//     const {bedRoomNum,bathRoomNum,type} = this.state
//     const {date,StartTime} = this.state
//     const {Postcode} = this.state
//     const startDateAndTime = `${date}T${StartTime}:00.000+00:00`

//     console.log("bedroom: ",bedRoomNum)
//     console.log("bathroom: ",bathRoomNum)
//     console.log("type: ",type)
//     console.log("start time: ",startDateAndTime)
//     console.log("postcode: ",Postcode)
//   }

//   changeHandler = (e) => {
//     const {name} = e.target
//     this.setState({
//       [name]:e.target.value
//     })
//     // console.log(name,e.target.value)
//   }
  
//   render() {
//     return(
//       <Box>
//         <Container maxWidth="lg" className={scssStyle.select__position}>
//           <Grid container spacing={1}>
//             <Grid item xs={12} md={2}>
//               <BedroomPicker />
//             </Grid>
//             <Grid item xs={12} md={2}>
//               <BathroomPicker />
//             </Grid>
//             <Grid item xs={12} md={2}>
//               <TypePicker />
//             </Grid>
//             <Grid item xs={12} md={2}>
//               <InsertPostcode />
//             </Grid>
//             <Grid item xs={12} md={2}>
//               <DatePicker />
//             </Grid>
//             <Grid item xs={12} md={2}>
//               <TimePicker />
//             </Grid>
//           </Grid>
//         </Container>

//         <div className={scssStyle.select__button}>
//           <HomeButton />
//         </div>
//       </Box>
//     )
//   }
// }

// export default HomeSelectForm