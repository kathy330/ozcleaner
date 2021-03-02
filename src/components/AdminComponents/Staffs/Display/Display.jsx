import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Box } from "@material-ui/core"
import Card from "../Grid"
import Avatars from "../Avatar"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
    },

  }))
  
  export default function Displays() {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
          <Box margin="auto">
            <Avatars />
          </Box>
          <Box margin="5% auto" width="60%">
            <Card /> 
          </Box> 
        </Box>   
      </div>
    )
  }
  
  