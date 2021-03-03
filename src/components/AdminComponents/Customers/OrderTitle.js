import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// style 
const useStyles = makeStyles({
  root: {
    marginBottom: 10,
  }
})
export default function OrderTitle() {
  const classes = useStyles()
  return (
    <Typography variant="h4" className={classes.root}>
      Three bedroom apartment bond cleaning
    </Typography>
  )
}