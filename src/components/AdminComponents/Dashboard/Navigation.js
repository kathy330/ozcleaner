/* eslint-disable */
import React from 'react'
import { Grid, Button, AppBar} from '@material-ui/core'
import { navBarStyle } from '../../../styles/styles'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import PopDetails from '../../SignUpComponents/PopupDetails'
import adminLogo from "../../../assets/adminLogo.svg" 



// styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  AppBar: {
    display: "flex",
    flexDirection: 'row',
    padding: "1%",
    shadows: 'none',
  },

  orange: {
    backgroundColor: deepOrange[500],
    color: theme.palette.getContrastText(deepOrange[500]),
  },

  purple: {
    backgroundColor: deepPurple[500],
    color: theme.palette.getContrastText(deepPurple[500]),
  },

  Avatar: {
    alignItems: "center",
    flexDirection: "column",
    margin: "1%",
  }
}))

export default function AdminHeaderNavigation() {
    const style = navBarStyle()
    const classes = useStyles()

    return (
      <div>
        <AppBar  className={`${style.AppBar} ${classes.AppBar}`}  position="static" elevation={0.5}>
          <Grid container className={style.grow} xs={11}>
            <Button href='/admin'>
              <img
                src={adminLogo} 
                className={style.logoimg}
                alt="admin icon"
              />
            </Button>
          </Grid> 
          <Grid container className={classes.Avatar} xs={1}>
            <PopDetails/>
          </Grid>
        </AppBar>

      </div>
    )
}