/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded'


const useStyles = makeStyles(() => ({
  root: {
    display:'flex',
    position:'absolute',
    '& > *': {
      zIndex:'1',
    },
  },
  input: {
    display: 'none',
  },
  icon:{
    width:'15vh',
    height:'15vh',
    color: 'transparent',
      '&:hover': {
        visibility:'visable',
        color:'white'
      },
}}))

export default function UploadBIcon() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton
          aria-label="upload picture" 
          component="span"
          className={classes.icon}    
        >
          <CloudUploadRoundedIcon fontSize="large" />
        </IconButton>
      </label>
    </div>
  )
}
