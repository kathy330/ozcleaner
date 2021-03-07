/* eslint-disable max-len */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import ButtonBase from '@material-ui/core/ButtonBase'
// import StarIcon from '@material-ui/icons/Star'
// import StarBorderIcon from '@material-ui/icons/StarBorder'
// import StarHalfIcon from '@material-ui/icons/StarHalf'
// import amber from '@material-ui/core/colors/amber'
// import { GreenStatus } from '../../../../pages/UI/Status'



const useStyles = makeStyles((themes) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: themes.spacing(2),
  },  
  // green: {
  //   color: 'white',
  //   background:'#89B153',
  //   borderRadius:20, 
  //   textAlign:'center',
  // }
  
}))



const cards = [{

    total:"2",
    review:"5.0",
    info:['11111', '111111@gmail.com', '333333','2222','2 years','available']
  
}]


export default function AutoGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
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
                  <Typography variant="h5">{card.total}</Typography>            
                </Grid>
                ))}
             
            </Grid>

          </Paper>
        </Grid>

        {/* Reviews */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography>Reviews</Typography>
              </Grid>
              {/* <Grid item container direction="row" spacing={2}> */}
              {cards.map((card)=>(
                <Grid item key={card.review}>
                  <Typography variant="h5">{card.review}</Typography>
                </Grid> 
              ))}
              {/* Stars */}
              {/* <Grid item>
                <ButtonBase>
                  <StarIcon style={{ color: amber[600] , fontSize: 20 }} />
                  <StarIcon style={{ color: amber[600] , fontSize: 20 }} />
                  <StarIcon style={{ color: amber[600] , fontSize: 20 }} />
                  <StarHalfIcon style={{ color: amber[600] , fontSize: 20 }} />
                  <StarBorderIcon style={{ color: amber[600] , fontSize: 20 }} />
                </ButtonBase>              
              </Grid> */}
            </Grid>            
          </Paper>
        </Grid>


        {/* Personal Infomation */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={4} justify="space-evenly">
              <Grid item xs={12} sm={3}>
                <ul>
                  <li>
                    <Typography>1111</Typography>
                    <Typography>1111</Typography>
                    <Typography>1111</Typography>
                    <Typography>1111</Typography>
                    <Typography>1111</Typography>
                    <Typography>1111</Typography>
                  </li>
                </ul>
              </Grid>
              {cards.map((card) => (
                <Grid item xs={12} sm={3}>
                  <ul>
                    {card.info.map((item) => (
                      <li key={item}>
                        <Typography>
                          {item}
                        </Typography>
                      </li>
                ))}
                  </ul>
                </Grid>
          ))}
            </Grid>
          </Paper>
        </Grid>


      </Grid>
    </div>
  )
}
