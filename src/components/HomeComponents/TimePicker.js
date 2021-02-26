import 'date-fns'
import React from 'react'
// import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers'


// 🌟diy样式方法2: styled（里面放要被改变的组件名字），
// KeyboardTimePicker重命名为MyKeyboardTimePicker;在下面引用 <MyKeyboardTimePicker/ >
// 法1在DatePicker 嵌套方法在postcodeInput
const MyKeyboardTimePicker = styled(KeyboardTimePicker)({
  // marginTop:'8px',
  marginLeft: '5px',
  width: '150px'
})

export default function MaterialUIPickers() {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()
  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const seconds = new Date().getSeconds()
  // 标准： 2014-08-18T21:11:54
  // 时间小于10自动补全一个0
  // 🐛bug:month结果是1月，其他数据都正确
  const timeNow = `${year}-`+
  `${month<10?(`0${month+1}`):month}-`+
  `${day<10?(`0${day}`):day}`+
  `T${hour<10?(`0${hour}`):hour}`+
  `:${minute<10?(`0${minute}`):minute}`+
  `:${seconds<10?(`0${seconds}`):seconds}`
  const [selectedDate, setSelectedDate] = React.useState(new Date(`${timeNow}`))

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
        label="Time picker"
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
