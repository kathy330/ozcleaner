import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const diyStyle = {
  postcodeStyle: {
    // marginTop:'8px',
    marginLeft:'5px',
    width:'150px',
  }
}

export default function BasicTextFields() {

  return (
    <form style={diyStyle.postcodeStyle} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Post Code" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </form>
  )
}