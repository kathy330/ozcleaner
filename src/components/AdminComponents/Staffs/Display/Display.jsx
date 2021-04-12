/* eslint-disable max-len */
import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Box} from "@material-ui/core"
import{ Alert} from '@material-ui/lab'
import Card from "../Card"
import Avatars from "../Avatar"
import {getSTAFFDETAILRequest} from "../../../../store/actions"

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
  
const Displays=(props)=> {
  const {data}=props
  const classes = useStyles()
  const dispatch=useDispatch()

  const staff =useSelector(state => state.staffDetails.staffDetails) 
  const loading = useSelector(state => state.staffDetails.loading)
  // const error = useSelector(state => state.staffDetails.error)

  const dispatchRequested=()=>{
    dispatch(getSTAFFDETAILRequest(data))
  }

  useEffect(()=>{
    dispatchRequested()
},[])


  return (
    <>
      {staff.loading&&<p>Loading...</p>}
      {staff.length!==0 &&(
      <div className={classes.root}>
        <Box>
          <Box className={classes.display}>
            <Box margin="auto">
              <Avatars UserData={staff} />
            </Box>
            <Box className={classes.card}>
              <Card UserData={staff} /> 
            </Box> 
          </Box>
          <Box className={classes.title}>Order History</Box> 
        </Box>
      </div>
      )} 
       
      {staff.length===0&&!loading&&
      (<Alert severity="info">No users available! — check it out!</Alert>)}
      {/* {error&&!loading&&
        ( 
          <Alert severity="error"> 
            <AlertTitle>{error}</AlertTitle>
            It&apos;s been a while since you&apos;ve signed in to Ozcleaner. 
            Please refresh your browser and try again.
          </Alert>
)} */}
    </>  

  )
}

export default Displays