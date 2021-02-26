import React from 'react'
import TextField from '@material-ui/core/TextField'
import HomeComponentStyle from './styles/HomeComponentStyle'

export default function BasicTextFields() {
  const classes = HomeComponentStyle()
  return (
    <form 
      className={classes.postCode}
      noValidate 
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Post Code" />
      {/* <p>test nest</p> */}
    </form>
  )
}