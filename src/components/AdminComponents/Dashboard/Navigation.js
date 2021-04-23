// /* eslint-disable */
import React from 'react'
import { Grid, Button, AppBar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import { navBarStyle } from '../../../styles/styles'
import admin2 from "../../../assets/admin2.svg" 



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  AppBar: {
    background: '#fafafa',
    display: "flex",
    flexDirection: 'row',
    padding: "0 10px",
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
  },

  signout: {
    width: '100%',
  },

  logoimg: {
    height: '5vh',
    marginLeft: '18px',
  }
}))

export default function AdminHeaderNavigation() {
    const style = navBarStyle()
    const classes = useStyles()

    const signoutHandler = () => {
      console.log('admin sign out')
      localStorage.removeItem('authLevel')
      localStorage.removeItem('employeeInfo')
      document.location.href = '/'
    }

    return (
      <div>
        <AppBar className={`${style.AppBar} ${classes.AppBar}`} position="static" elevation={1}>
          <Grid item className={style.grow} xs={6} md={9}>
            <Button href='/admin'>
              <img
                src={admin2} 
                className={classes.logoimg}
                alt="admin icon"
              />
            </Button>
          </Grid> 
        
          <Grid container direction="row" className={classes.Avatar}>
            <Grid item xs={6} md={9} />
            <Grid item xs={6} md={3}>
              <Button className={classes.signout} onClick={signoutHandler}>Sign Out</Button>
            </Grid>
          </Grid>
          
        </AppBar>
      </div>
    )
}