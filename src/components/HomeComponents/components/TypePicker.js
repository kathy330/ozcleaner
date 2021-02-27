import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import HomeComponentStyle from '../styles/HomeComponentStyle'


export default function TypePicker() {
  const classes = HomeComponentStyle()
  const [type, setType] = React.useState('')

  const changeHandler = (event) => {
    setType(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <FormControl className={classes.typePicker} onSubmit={submitHandler}>
        <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          name="bedRoomNum"
          onChange={changeHandler}
        >
          <MenuItem value="RC">Regular</MenuItem>
          <MenuItem value="EC">End of lease</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}