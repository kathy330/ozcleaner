import 'date-fns'
import React from 'react'
// import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { makeStyles } from '@material-ui/core/styles'

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

// 🌟diy样式方法1: 需要引用的地方：className={classes.root}，
// 并且需要引入 const classes = useStyles()
// 法2在timePicker；嵌套方法在postcodeInput
const useStyles = makeStyles({
  root: {
    // marginTop:'8px',
    marginLeft: '5px',
    width: '150px',
  },
})

export default function MaterialUIPickers() {
  const classes = useStyles()
  
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()
  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const seconds = new Date().getSeconds()
  // console.log(year,month,day)
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
      {/* <Grid container justify="space-around"> 日历框框周围间距 */}
      <KeyboardDatePicker
        // margin="normal"
        // style={diyStyle.dateStyle}
        className={classes.root}
        id="date-picker-dialog"
        label="Date picker dialog"
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
