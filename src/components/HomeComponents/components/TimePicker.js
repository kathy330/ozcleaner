import 'date-fns'
import React from 'react'
import { styled } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers'
import getTime from './getTime'

// 🌟diy样式方法2: styled（里面放要被改变的组件名字），
// KeyboardTimePicker重命名为MyKeyboardTimePicker;在下面引用 <MyKeyboardTimePicker/ >
// 法1和嵌套方法在 style/HomeComponentStyle.js
const MyKeyboardTimePicker = styled(KeyboardTimePicker)({
  marginLeft: '5px',
  width: '210px'
})

export default function MaterialUIPickers() {
  const time = getTime()
  const [selectedTime, setSelectedTime] = React.useState(new Date(`${time}`))

  const changeHandler = (date) => {
    setSelectedTime(date)
    console.log(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> */}
      {/* <KeyboardTimePicker */}
      <MyKeyboardTimePicker
        // margin="normal"
        id="time-picker"
        label="Choose your time"
        value={selectedTime}
        onChange={changeHandler}
        KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
      />
      {/* </Grid> */}
    </MuiPickersUtilsProvider>
  )
}
