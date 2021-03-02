import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grids from "../Grid"
import Avatars from "../Avatar"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    left:{
      
    }

  }))
  
export default function Displays() {
    const classes = useStyles()
  
    return (
      <div className={classes.root}>
        <Box display="flex" flexDirection="row">
          <Avatars />
          <Grids />
        </Box>
        
      </div>
    )
  }
  