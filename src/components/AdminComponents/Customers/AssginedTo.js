import React from 'react'
import { Grid, makeStyles, Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'
import style from '../scss/Admin.module.scss'

// styles
const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  modifiedTime: {
    marginTop: 50,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}))


export default function AssginedTo() {
  const classes = styles()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={2}>
        <Box>
          <Avatar className={classes.orange}>N</Avatar>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          ASSGINED TO
        </Box>
        <Box>
          Name
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.modifiedTime}>
        <div>
          Modified Time
        </div>
      </Grid>
      <hr className={style.hrs} />
    </Grid>
  )
}
