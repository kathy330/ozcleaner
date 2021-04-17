import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// style 
const useStyles = makeStyles({
  root: {
    marginTop: '15px',
    marginBottom: '40px',
    paddingLeft: '10px',
  }
})
export default function OrderTitle(props) {
  const classes = useStyles()
  const { title } = props
  return (
    <Typography variant="h4" className={classes.root}>
      {title}
    </Typography>
  )
}