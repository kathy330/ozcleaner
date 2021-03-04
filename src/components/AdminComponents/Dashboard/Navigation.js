/* eslint-disable */
import React from 'react'
import { Grid, Button, AppBar, Avatar} from '@material-ui/core'
import { navBarStyle } from '../../../styles/styles'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, deepPurple } from '@material-ui/core/colors';



// styles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    AppBar: {
        flexDirection: 'row',
        display: "flex",
        padding:"1%",
        shadows: 'none'
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    Avatar: {
        alignItems: "center",
        flexDirection: "column"

    }
}))

export default function AdminHeaderNavigation() {
    const style = navBarStyle()
    const classes = useStyles()

    return (
      <div>
        <AppBar  className={`${style.AppBar} ${classes.AppBar}`}  position="static" elevation={0.5}>
            
          <Grid container className={style.grow} xs={11}>
            <Button>Logo</Button>
          </Grid> 
          <Grid container className={classes.Avatar} xs={1}>
            <Avatar className={classes.orange} >J</Avatar>
          </Grid>
        </AppBar>

      </div>
    )
}