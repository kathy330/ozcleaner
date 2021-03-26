/* eslint-disable */
import { Grid, Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import date from 'date-and-time'
import { Today } from '@material-ui/icons'

// style
const useStyles = makeStyles(() => ({
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10
  },
}))

function displayTime(time) {
  // 2020-01-01T12:00:00.000+00:00

  let result = date.parse(time.split('.')[0], 'YYYY-MM-DD hh:mm:ss')
  result = result.toString().split(" ")
  return `${date.transform(result[4], 'HH:mm:ss', 'hh:mmA')} 
  ${result[2]} ${result[1]},${result[3]}`
}

export default function DueDate(props) {
  const classes = useStyles()
  const { endTime } = props
  console.log(endTime)
  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={2} sm={1} className={classes.icon}>
        <Today />
      </Grid>
      <Grid item justify="center" xs={10} sm={11} className={classes.text}>
        <Typography variant="subtitle2">DUE DATE</Typography>
        <Typography variant="body2">{displayTime(endTime)}</Typography>
      </Grid>
    </Box>
  )
}
