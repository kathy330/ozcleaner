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


const customers=[{
  name:"Jack Postman",
}]


export default function ImageAvatars() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid item xs container direction="column" spacing={2}>
        {customers.map((customer)=>(
          <Grid item className={classes.img} key={customer.name}>
         
            <Avatar className={classes.large}>{customer.name.slice(0,2).toUpperCase()}</Avatar>

          </Grid>
        ))}
        {customers.map((customer)=>(
          <Grid item xs>
            <Box textAlign="center" width="100%" fontWeight="bold" fontSize={25} key={customer.name}>
              {customer.name}
            </Box>
          </Grid>
        ))}

        
        <Grid item xs>
          <Box color="white" bgcolor="#89b153" p={1} borderRadius={15} fontWeight={700} textAlign="center">
            Customer
          </Box>
          
        </Grid>
      </Grid>
    </div>
  )
}
