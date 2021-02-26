import 'date-fns'
import React from 'react'
// import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers'

const diyStyle = {
  timeStyle: {
    // marginTop:'8px',
    marginLeft:'5px',
    width:'150px'
  }
}

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
  // console.log(month)
  const [selectedDate, setSelectedDate] = React.useState(new Date(`${timeNow}`))

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> */}
      <KeyboardTimePicker
          // margin="normal"
        style={diyStyle.timeStyle}
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
