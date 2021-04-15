import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// style 
const useStyles = makeStyles({
  root: {
    marginBottom: 10,
    paddingLeft: 10,
  }
})
export default function OrderTitle(props) {
  const classes = useStyles()
  const { title } = props
  return (
    <Typography variant="h5" className={classes.root}>
      {title}
    </Typography>
  )
}