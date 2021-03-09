import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Box } from "@material-ui/core"
import Card from "../Card"
import Avatars from "../Avatar"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    display:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      flexWrap:"wrap"
    },
    card:{
      [theme.breakpoints.down("xs")]: {
        width:"100%",
        margin:"5% auto"
      },
      [theme.breakpoints.up("sm")]: {
        width:"60%",
        margin:"5% auto"
      },
    },
    title:{
      margin:"2% 2%",
      fontWeight:"bold",
      fontSize:"2vh"
    }
  }))
  
  export default function Displays() {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Box>
          <Box className={classes.display}>
            <Box margin="auto">
              <Avatars />
            </Box>
            <Box className={classes.card}>
              <Card /> 
            </Box> 
          </Box>
          <Box className={classes.title}>Order History</Box> 
        </Box>
         
      </div>
    )
  }
  
  