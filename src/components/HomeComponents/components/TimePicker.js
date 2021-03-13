import 'date-fns'
import React from 'react'
// import { styled } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers'
import InputLabel from '@material-ui/core/InputLabel'
import getTime from './getTime'
import HomeComponentStyle from '../styles/HomeComponentStyle'

// 🌟diy样式方法2: styled（里面放要被改变的组件名字），
// KeyboardTimePicker重命名为MyKeyboardTimePicker;在下面引用 <MyKeyboardTimePicker/ >
// https://codesandbox.io/s/qqnde?file=/demo.js
// 法1和嵌套方法在 style/HomeComponentStyle.js
// const MyKeyboardTimePicker = styled(KeyboardTimePicker)({
//   // marginLeft: '5px',
//   // width: '210px'
//   width: '100%',
//   padding: "0 10px",
// })

export default function MaterialUIPickers() {
  const time = getTime()
  const classes = HomeComponentStyle()
  const [selectedTime, setSelectedTime] = React.useState(new Date(`${time}`))

  const changeHandler = (date) => {
    setSelectedTime(date)
    console.log(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> */}
      {/* <KeyboardTimePicker */}
      <InputLabel 
        // id="demo-simple-select-filled-label"
        className={classes.datePicker}
      >
        Time:
      </InputLabel>
      <KeyboardTimePicker
        // margin="normal"
        id="time-picker"
        // label="Time"
        value={selectedTime}
        onChange={changeHandler}
        className={classes.datePicker}
        KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
      />
      {/* </Grid> */}
    </MuiPickersUtilsProvider>
  )
}
