import React from 'react'
import { Grid, makeStyles, Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { deepPurple } from '@material-ui/core/colors'
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
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}))

export default function CreatBy({ image, name, time, title }) {
  const classes = styles()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={2}>
        <Box>
          <Avatar className={classes.purple}>{image}</Avatar>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          {title}
        </Box>
        <Box>
          {name}
        </Box>
      </Grid>
      <Grid item xs={7} className={classes.modifiedTime}>
        <div>
          {time}
        </div>
      </Grid>
      <hr className={style.hrs} />
    </Grid>
  )
}
