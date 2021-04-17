/* eslint-disable max-len */
import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {Grid} from "@material-ui/core"
import{ Alert} from '@material-ui/lab'
import Typography from "@material-ui/core/Typography"
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
    card:{
        margin:"5% auto"
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
        <Grid container direction="column">
          <Grid container item lg spacing={4}>
            <Grid item lg={4} style={{margin:"auto"}}>
              <Avatars UserData={staff} />
            </Grid>
            <Grid item lg={8} className={classes.card}>
              <Card UserData={staff} /> 
            </Grid> 
          </Grid>
          <Grid container style={{marginLeft:"2vh"}}>
            <Typography variant="h6">Order History</Typography> 
          </Grid>
        </Grid>
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