import React from "react"
import Button from '@material-ui/core/Button'
import HomeComponentStyle from '../styles/HomeComponentStyle'


export default function HomeButton() {
  const classes = HomeComponentStyle()
  return(
    <>
      <Button
        className={classes.button} 
        variant="contained"
        type="submit"
      >
        Booking from $80
      </Button>
    </>
  )
}