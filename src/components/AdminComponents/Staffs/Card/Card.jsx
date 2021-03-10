/* eslint-disable max-len */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Paper,Grid,Typography,Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles((themes) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: themes.spacing(2),
  },
  status1:{
    backgroundColor: "#89b153",
    float: "left",
    padding: "2px 25px",
    listStyleType: "none",
    borderRadius: "100px",
    color:"white",
  },
  li: {
    [themes.breakpoints.down("xs")]: {
      margin:"2%"
    },
    [themes.breakpoints.up("sm")]: {
      margin:"10%"
    },
  },

  status2:{

    backgroundColor: "grey",
    float: "left",
    padding: "0 12px",
    listStyleType: "none",
    borderRadius: "100px",
    color:"white",

  }
}))

const cards = [
  {
    total:"4321",
    review:"2.7",
    info:['11111', '111111@gmail.com', '333333', '2222', '2 years', 'Available'],
    status:"Available"
  
}]


function showCardInfo(card, index, isAvailable, classes) {
  if (index.valueOf() === 5) {
    return (
      <div className={`title ${isAvailable ? classes.status1 : classes.status2}`}>
        <li key={card.item}>
          <Typography variant="subtitle2">
            { card.info[index] }
          </Typography>
        </li>
      </div>
)
  } 
    return (
      <li key={card.item} className={classes.li}>
        <Typography variant="body2">
          { card.info[index] }
        </Typography>
      </li>
  )
  
}

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
                <Typography>Reviews</Typography>
              </Grid>
              <Grid item container direction="row" spacing={2}>
                {cards.map((card)=>(
                  <Grid item xs key={card.review}>
                    <Typography variant="h6">{card.review}</Typography>
                  </Grid> 
              ))}
                {/* Stars */}
                {cards.map((card)=>(
                  <Grid item xs>
                    <Box component="fieldset" mb={0.5} borderColor="transparent" key={card.review}>
                      <Rating name="half-rating-read" defaultValue={card.review} precision={0.5} readOnly />
                    </Box>
                  </Grid>
                ))}
              </Grid>            
            </Grid>            
          </Paper>
        </Grid>


        {/* Personal Infomation */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={4} justify="space-evenly">
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
                  <li className={classes.li}>
                    <Typography variant="subtitle2">ABN</Typography>
                  </li>
                  <li className={classes.li}>
                    <Typography variant="subtitle2">Experience</Typography> 
                  </li>
                  <li className={classes.li}>
                    <Typography variant="subtitle2">Status</Typography>
                  </li>
                </ul>
              </Grid>
              {cards.map((card) => (
                <Grid item xs={8} sm={3}>
                  <ul>
                    {card.info.map((item, index) => (
                     showCardInfo(card, index, card.status === "Available", classes)
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
