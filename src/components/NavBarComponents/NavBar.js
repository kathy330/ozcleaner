import React from "react"
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import PropTypes from "prop-types"
import {navBarStyle} from "../../styles/styles"

// https://material-ui.com/zh/components/app-bar/#usescrolltrigger-options-trigger
// 滑动消失/显示
function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ 
    target: window ? window() : undefined,
    disableHysteresis: true // 默认值为false, 为true时会忽略在滚动的方向。
   })

  return (
    <Slide appear direction="down" in={trigger}>
      {children}
    </Slide>
  )
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}
/* eslint-disable react/jsx-props-no-spreading */
export default function HeaderNavigation(props) {
  const style = navBarStyle()
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={style.AppBar}>
          <Grid item className={style.container}>
            <Toolbar m={9}>
              <Grid className={style.grow} m={9}>
                <Button>
                  Logo
                </Button>
              </Grid>
              <Button className={style.bookingButton}>Booking Now</Button>
              <Button>Sign Up</Button>
              <Button>Login</Button>
            </Toolbar>
          </Grid>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}
