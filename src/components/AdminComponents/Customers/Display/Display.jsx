import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from "@material-ui/core"
import Card from "../Card"
import Avatars from "../Avatar"
import {getCUSDETAILRequest} from "../../../../store/actions"

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

  const users =useSelector(state => state.cusDetails.cusDetails) 
  const loading = useSelector(state => state.cusDetails.loading)
  const error = useSelector(state => state.cusDetails.error)
 


  const dispatchRequested=()=>{
    dispatch(getCUSDETAILRequest(data))
  }
  useEffect(()=>{
   dispatchRequested()
},[])

  return (
    <>
      {users.loading&&<p>Loading...</p>}

      {users.length!==0&&(
        <div className={classes.root}>
          <Box>
            <Box className={classes.display}>
              <Box margin="auto">
                <Avatars UserData={users} />
              </Box>
              <Box className={classes.card}>
                <Card UserData={users} /> 
              </Box> 
            </Box>
            <Box className={classes.title}>Order History</Box> 
          </Box>
        </div>
    )}
      {users.length===0&&!loading &&<p>No users available!</p>}
      {error&&!loading&&<p>{error}</p>}

    </>  
  
  )
}

export default Displays