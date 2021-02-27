import 'date-fns'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers"

import HomeComponentStyle from '../styles/HomeComponentStyle'
import getTime from './getTime'


export default function MaterialUIPickers() {
  // diy样式方法需要引用的地方：className={classes.root}
  // 标准： 2014-08-18T21:11:54
  // const time = new Date().toISOString().split('.')[0] //获取的是UTC

  const classes = HomeComponentStyle()
  const time = getTime()
  const [selectedDate, setSelectedDate] = React.useState(new Date(`${time}`))

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> 日历框框周围间距 */}
      <KeyboardDatePicker
        // margin="normal"
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