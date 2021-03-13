import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'

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
    }
}))

export default function LetterAvatars() {
  const classes = useStyles()

  return (
    <>
      <Avatar className={classes.orange}>Z</Avatar>
    </>
  )
}
