/* eslint-disable no-underscore-dangle */
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

export default function Avatars(props){

  const classes = useStyles()
  const {UserData}=props
  // console.log(UserData)

  return (

    <div className={classes.root}>
      {UserData.map((user)=>(
        <Grid key={user._id} item xs container direction="column" spacing={2}>
          <Grid item className={classes.img}>
            <Avatar className={classes.large}>{user.name.firstName.slice(0,2).toUpperCase()}</Avatar>
          </Grid>
             
          <Grid item xs>
            <Box textAlign="center" width="100%" fontWeight="bold" fontSize={25}>
              {user.name.firstName}
              {' '}
              {user.name.lastName}
            </Box>
          </Grid>
    
          <Grid item xs>
            <Box color="white" bgcolor="#89b153" p={1} borderRadius={15} fontWeight={700} textAlign="center" maxWidth="20vh" margin="auto">
              Customer
            </Box>
          
          </Grid>
        </Grid>
     ))}
    </div>

  )
}

