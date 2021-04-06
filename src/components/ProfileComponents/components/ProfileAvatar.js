import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'


function stringToColor() {
  const hex = Math.floor(Math.random() * 0xFFFFFF)
  const color = `#${ hex.toString(16)}`
  return color
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      fontSize: '2rem',
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    
  },
  orange: {
  position:'relative',
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[400],
  width:'15vh',
  height:'15vh',
    },
  randomColor:{
    position:'relative',
    width:'13vh',
    height:'13vh',
    backgroundColor: `${stringToColor()}`,
    fontSize:'4vh'
  }
}))

export default function LetterAvatars() {
  const classes = useStyles()
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const {lastName} = user.data
  const firstChar = lastName[0].toUpperCase()
  return (
    <>
      <Avatar className={classes.randomColor}>{firstChar}</Avatar>
    </>
  )
}
