/* eslint-disable max-len */
import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import {getCUSDETAILRequest} from "../../../../store/actions/actionCreator"

const useStyles = makeStyles((themes) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: themes.spacing(1),
    },
  },
  small: {
    width: themes.spacing(3),
    height: themes.spacing(3),
  },
  large: {
    width: themes.spacing(16),
    height: themes.spacing(16),
    fontSize:50,
  },
  img:{
    margin:"auto",
  }
}))

function CombineName(firstname,lastname) {
  const fullName=`${firstname} ${lastname}`
  return fullName
}

const AVA= () =>{

  const classes = useStyles()
  const dispatch=useDispatch()

  const cusname =useSelector(state => state.cusDetails.cusDetails) 
  const loading = useSelector(state => state.cusDetails.loading)
  const error = useSelector(state => state.cusDetails.error)


  useEffect(()=>{
    dispatch(getCUSDETAILRequest())
},[])


  return (
    <>
      {cusname.loading&&<p>Loading...</p>}
      {cusname.length===0&&!loading &&<p>No users available!</p>}
      {error&&!loading&&<p>{error}</p>}
      {cusname.length>0&&cusname.map((user)=>(
        <div className={classes.root}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item className={classes.img}>
              <Avatar className={classes.large} key={user.name}>{user.name.firstName.slice(0,2).toUpperCase()}</Avatar>
            </Grid>
             
            <Grid item xs>
              <Box textAlign="center" key={user.name} width="100%" fontWeight="bold" fontSize={25}>
                {CombineName(user.name.firstName,user.name.lastName)}
              </Box>
            </Grid>
    
            <Grid item xs>
              <Box color="white" bgcolor="#89b153" p={1} borderRadius={15} fontWeight={700} textAlign="center">
                Customer
              </Box>
          
            </Grid>
          </Grid>
        </div>
    ))}
    </>  
   
  )
}

export default AVA
