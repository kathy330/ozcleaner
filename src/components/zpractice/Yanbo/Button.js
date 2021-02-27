import React from "react"
import Button from '@material-ui/core/Button'
// 使用顺序：HomeButton组件使用styles里export的 {buttonStyle} ->
// -> style 使用的 theme里的配色字体方案
import {buttonStyle} from '../../../styles/styles'

export default function PopupButton() {
  const classes = buttonStyle()
  return(
    <>
      <Button
        className={classes.bookingButton}
        variant="contained"
        type="submit"
      >
        Sign Up
      </Button>
    </>
  )
}