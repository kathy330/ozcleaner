// /* eslint-disable */
import React from 'react'
import { Grid, Button, AppBar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import { navBarStyle } from '../../../styles/styles'
// import PopDetails from '../../SignUpComponents/PopupDetails'
// import adminLogo from "../../../assets/adminLogo.svg" 
import admin1 from "../../../assets/admin1.svg" 



// styles
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
    alignItems: "center"
    // flexDirection: "row"
    // margin: "1%",
  },

  signout: {
    width: '100%',
  }
}))

export default function AdminHeaderNavigation() {
    const style = navBarStyle()
    const classes = useStyles()

    const signoutHandler = () => {
      // dispatch(signout())
      console.log('admin sign out')
      localStorage.removeItem('authLevel')
      localStorage.removeItem('employeeInfo')
      document.location.href = '/'
    }

    return (
      <div>
        {/* <Grid item className={style.container}> */}
        <AppBar className={`${style.AppBar} ${classes.AppBar}`} position="static" elevation={1}>
          <Grid item className={style.grow} xs={6} md={9}>
            <Button href='/admin'>
              <img
                src={admin1} 
                className={style.logoimg}
                alt="admin icon"
              />
            </Button>
          </Grid> 
        
          <Grid container direction="row" className={classes.Avatar}>
            <Grid item xs={6} md={9} />
            <Grid item xs={6} md={3}>
              <Button className={classes.signout} onClick={signoutHandler}>Sign Out</Button>
            </Grid>
            {/* <Grid item xs={3}>
              <PopDetails/>
            </Grid> */}
          </Grid>
          
        </AppBar>
        {/* </Grid> */}
      </div>
    )
}