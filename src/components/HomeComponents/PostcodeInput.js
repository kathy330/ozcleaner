import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

// 🌟diy样式方法3: 嵌套<& p>  需要引用的地方：className={classes.root},下面的<p>自动
// 法1在DatePicker，法2在TimePicker
const useStyles = makeStyles({
  root: {
    marginLeft: '5px',
    width: '150px',

    '& p': {
      color: 'rgb(252, 142, 142)',
      fontSize: '30px',
    }
  },
})

export default function BasicTextFields() {
  const classes = useStyles()
  return (
    <form 
      className={classes.root}
      noValidate 
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Post Code" />
      {/* <p>test nest</p> */}
    </form>
  )
}