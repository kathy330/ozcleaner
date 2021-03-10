import React from "react"
import Button from '@material-ui/core/Button'
// 使用顺序：HomeButton组件使用styles里export的 {buttonStyle} ->
// -> style 使用的 theme里的配色字体方案
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import {buttonStyle} from './styles/styles'
import './styles/Style.scss'
import GoogleLogo from './resource/google.png'



export function PopupButton() {
  const classes = buttonStyle()
  return(
    <>
      <Button
        className={classes.homeBookingButton}
        // variant="contained"
        type="submit"
      >
        Sign Up
      </Button>
    </>
  )
}
export function PopupLoginButton() {
  const classes = buttonStyle()
  return(
    <>
      <Button
        className={classes.homeBookingButton}
        // variant="contained"
        type="submit"
      >
        Login
      </Button>
    </>
  )
}

export function FbButton() {  
  const classes = buttonStyle()
  return(
    <>
      <Button
        className={classes.faceBookButton}
        variant="contained"
        type="submit"
      >
        <FontAwesomeIcon className='facebook' icon={faFacebook} />
        Facebook
      </Button>
    </>
  )
}

export function GoogleButton() {
  const classes = buttonStyle()
  return(
    <>
      <Button
        className={classes.googleButton}
        variant="contained"
        type="submit"
      >
        <img src={GoogleLogo} className='google' alt="fireSpot" />
        <p className='google-font'>Google</p>
      </Button>
    </>
  )
}


