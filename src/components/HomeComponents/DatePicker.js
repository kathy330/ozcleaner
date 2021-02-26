import 'date-fns'
import React from 'react'
// import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers'
import HomeComponentStyle from './styles/HomeComponentStyle'

export default function MaterialUIPickers() {
  // diy样式方法需要引用的地方：className={classes.root}
  const classes = HomeComponentStyle()
  // 标准： 2014-08-18T21:11:54
  const time = new Date().toISOString().split('.')[0]
  const [selectedDate, setSelectedDate] = React.useState(new Date(`${time}`))

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> 日历框框周围间距 */}
      <KeyboardDatePicker
        // margin="normal"
        // style={diyStyle.dateStyle}
        className={classes.datePicker}
        id="date-picker-dialog"
        label="Choose your date"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
      />
      {/* </Grid> */}
    </MuiPickersUtilsProvider>
  )
}

// 获取2014-08-18T21:11:54格式的方法
// const year = new Date().getFullYear()
// const month = new Date().getMonth()
// const day = new Date().getDate()
// const hour = new Date().getHours()
// const minute = new Date().getMinutes()
// const seconds = new Date().getSeconds()

// 时间小于10自动补全一个0
// 🐛bmonth结果是1月，需要+1
// const timeNow = `${year}-`+
// `${month<10?(`0${month+1}`):month}-`+
// `${day<10?(`0${day}`):day}`+
// `T${hour<10?(`0${hour}`):hour}`+
// `:${minute<10?(`0${minute}`):minute}`+
// `:${seconds<10?(`0${seconds}`):seconds}`