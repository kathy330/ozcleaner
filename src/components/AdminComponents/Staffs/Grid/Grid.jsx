/* eslint-disable max-len */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  title: {
    fontFamily:"Poppins",
    fontSize:15,
    color:"#354052"
  },
  num:{
    fontFamily:"Poppins",
    fontWeight:'bold',
    color:'#11141a'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign:'left',
    color: theme.palette.text.secondary,
  },
  image: {
    width: "100%",
    height: "90%",
  },
}))

export default function AutoGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* Total Orders,Ongoing Orders */}
      <Grid container spacing={2} xs={12}>
        {/* Total Orders */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title}>
                  Total Orders
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.num}>
                  4231
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>



        {/* Onging Orders */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title}>
                  Ongoing Orders
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.num}>
                  2
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Total Earns,Reviews */}

        {/* Reviews */}
        <Grid item xs>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title}>
                  Reviews
                </Typography>
              </Grid>
              <Grid item container direction="row" spacing={2}>
                <Grid item xs={5} sm={4}>
                  <Typography className={classes.num}>
                    5.0
                  </Typography>
                </Grid> 
                {/* Stars */}
                <Grid item xs={7} sm={8}>
                  <ButtonBase className={classes.image}>
                    <FontAwesomeIcon icon={faStar} style={{color:'#e9a52d'}} />
                    <FontAwesomeIcon icon={faStar} style={{color:'#e9a52d'}} />
                    <FontAwesomeIcon icon={faStar} style={{color:'#e9a52d'}} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </ButtonBase>              
                </Grid>
              </Grid>            
            </Grid>
          
 

          </Paper>
        </Grid>
        {/* Total Earns */}
        <Grid item xs>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title}>
                  Total Earns
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.num}>
                  $8238.00
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
