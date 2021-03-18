/* eslint-disable max-len */
import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'


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

export default function Avatars(props){

  const classes = useStyles()
  const {UserData}=props
  // console.log(UserData)

  return (

    <div className={classes.root}>
      {UserData.map((user)=>(
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
     ))}
    </div>

  )
}

