/* eslint-disable max-len */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Paper,Grid,Typography,Box } from '@material-ui/core'

const useStyles = makeStyles((themes) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: themes.spacing(2),
  },
  li: {
    [themes.breakpoints.down("xs")]: {
      margin:"2%"
    },
    [themes.breakpoints.up("sm")]: {
      margin:"10%"
    },
 
  },
}))

const cards = [
  {
    total:"4",
    Orderfinished:"2",
    info:['11111', '111111@gmail.com', '333333'],
  
}]


export default function AutoGrid() {

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container spacing={5}>
        {/* Total Orders */}

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>

            <Grid item xs container direction="column" spacing={2}>
     
              <Grid item xs>
                <Typography>Total Orders</Typography>                       
              </Grid>
              {cards.map((card)=>(
                <Grid item key={card.total}>
                  <Typography variant="h6">{card.total}</Typography>            
                </Grid>
                ))}
             
            </Grid>

          </Paper>
        </Grid>

        {/* Reviews */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid item xs sm container direction="column" spacing={2}>
              <Grid item>
                <Typography>Completed Orders</Typography>
              </Grid>
              {cards.map((card)=>(
                <Grid item xs key={card.Orderfinished}>
                  <Typography variant="h6">{card.Orderfinished}</Typography>
                </Grid> 
              ))}         
            </Grid>            
          </Paper>
        </Grid>


        {/* Personal Infomation */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Grid container justify="space-evenly">
              <Grid item xs={4} sm={3}>
                <ul>
                  <li className={classes.li}>
                    <Typography variant="subtitle2">Postcode</Typography>
                  </li>
                  <li className={classes.li}>
                    <Typography variant="subtitle2">Email</Typography>
                  </li>
                  <li className={classes.li}>
                    <Typography variant="subtitle2">Phone</Typography>
                  </li>
                </ul>
              </Grid>
              {cards.map((card) => (
                <Grid item xs={8} sm={3}>
                  <ul>
                    {card.info.map((item) => (
                      <li key={item} className={classes.li}>
                        <Typography variant="body2">{item}</Typography>
                      </li>
          ))}
                  </ul>
                </Grid>
         ))}
            </Grid>
          </Paper>
        </Grid>


      </Grid>
    </Box>
  )
}