import 'date-fns'
import React from 'react'
// import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers'
import getTime from './components/getTime'

// 🌟diy样式方法2: styled（里面放要被改变的组件名字），
// KeyboardTimePicker重命名为MyKeyboardTimePicker;在下面引用 <MyKeyboardTimePicker/ >
// 法1和嵌套方法在 style/HomeComponentStyle.js
const MyKeyboardTimePicker = styled(KeyboardTimePicker)({
  // marginTop:'8px',
  marginLeft: '5px',
  width: '210px'
})

export default function MaterialUIPickers() {
  const time = getTime()
  const [selectedDate, setSelectedDate] = React.useState(new Date(`${time}`))

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> */}
      {/* <KeyboardTimePicker */}
      <MyKeyboardTimePicker
        // margin="normal"
        id="time-picker"
        label="Choose your time"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
      />
      {/* </Grid> */}
    </MuiPickersUtilsProvider>
  )
}
