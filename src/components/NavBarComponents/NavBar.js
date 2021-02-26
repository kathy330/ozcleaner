import React from "react"
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core"
import {navBarStyle} from "../../styles/styles"

export default function HeaderNavigation() {
  const style = navBarStyle()
  return (
    <div>
      <AppBar position="absolute" className={style.AppBar}>
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
    </div>
  )
}
