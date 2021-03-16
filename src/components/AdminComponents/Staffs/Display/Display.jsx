import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from "@material-ui/core"
import Card from "../Card"
import Avatars2 from "../Avatar"
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
  
const DisplaySTAFF=()=> {
  const classes = useStyles()
  const dispatch=useDispatch()

  const staff =useSelector(state => state.staffDetails.staffDetails) 
  const loading = useSelector(state => state.staffDetails.loading)
  const error = useSelector(state => state.staffDetails.error)
  console.log("STAFF :",staff)

  useEffect(()=>{
    dispatch(getSTAFFDETAILRequest())
},[])

    console.log(staff.length);

  return (
    <>
      {staff.loading&&<p>Loading...</p>}
      {staff.length!==0 &&(
      <div className={classes.root}>
        <Box>
          <Box className={classes.display}>
            <Box margin="auto">
              <Avatars2 User={staff} />
            </Box>
            <Box className={classes.card}>
              <Card /> 
            </Box> 
          </Box>
          <Box className={classes.title}>Order History</Box> 
        </Box>
      </div>
      )} 
       
      {staff.length===0&&!loading &&<p>No staffs available!</p>}
      {error&&!loading&&<p>{error}</p>}
  
    </>  

  )
}

export default DisplaySTAFF