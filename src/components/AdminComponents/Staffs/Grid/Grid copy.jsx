/* eslint-disable max-len */
import React from 'react'
import { makeStyles,createMuiTheme, ThemeProvider,responsiveFontSizes } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import amber from '@material-ui/core/colors/amber'
// import Button from '@material-ui/core/Button'
// import {statusStyle} from '../../../../styles/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)


const useStyles = makeStyles((themes) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: themes.spacing(2),
    textAlign:'left',
    margin:" 0 5%"
  },  
  green: {
    color: 'white',
    background:'#89B153',
    borderRadius:20, 
    textAlign:'center',
  }
  
}))

export default function AutoGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* Total Orders,Ongoing Orders */}
      <Grid container spacing={5}>
        {/* Total Orders */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Total Orders
                  </Typography>
                </ThemeProvider>              
              </Grid>
              <Grid item>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    4231
                  </Typography>
                </ThemeProvider>              
              </Grid>
            </Grid>
          </Paper>
        </Grid>





        {/* Total Earns,Reviews */}

        {/* Reviews */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Reviews
                  </Typography>
                </ThemeProvider>

              </Grid>
              <Grid item container direction="row" spacing={2}>
                <Grid item>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h5">
                      5.0
                    </Typography>
                  </ThemeProvider>
       
                </Grid> 
                {/* Stars */}
                <Grid item>
                  <ButtonBase>
                    <StarIcon style={{ color: amber[600] , fontSize: 20 }} />
                    <StarIcon style={{ color: amber[600] , fontSize: 20 }} />
                    <StarIcon style={{ color: amber[600] , fontSize: 20 }} />
                    <StarHalfIcon style={{ color: amber[600] , fontSize: 20 }} />
                    <StarBorderIcon style={{ color: amber[600] , fontSize: 20 }} />
                  </ButtonBase>              
                </Grid>
              </Grid>            
            </Grid>
          
 

          </Paper>
        </Grid>





        {/* Onging Orders */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Postcode
                  </Typography>
                </ThemeProvider>             
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    4101
                  </Typography>
                </ThemeProvider>          
              </Grid>
            </Grid>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Email
                  </Typography>
                </ThemeProvider>             
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Jack.p@mail.com
                  </Typography>
                </ThemeProvider>          
              </Grid>
            </Grid>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Phone
                  </Typography>
                </ThemeProvider>             
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    111111111
                  </Typography>
                </ThemeProvider>          
              </Grid>
            </Grid>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    ABN
                  </Typography>
                </ThemeProvider>             
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    1234567
                  </Typography>
                </ThemeProvider>          
              </Grid>
            </Grid>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Experience
                  </Typography>
                </ThemeProvider>             
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    2 years
                  </Typography>
                </ThemeProvider>          
              </Grid>
            </Grid>
            <Grid item xs sm container direction="row" spacing={2}>
              <Grid item xs sm={6}>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Status
                  </Typography>
                </ThemeProvider>             
              </Grid>
              <Grid item xs sm={3} className={classes.green}>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Available
                  </Typography>
                </ThemeProvider>          
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* Total Earns */}
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Total Earns
                  </Typography>
                </ThemeProvider>
              </Grid>
              <Grid item>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    $8238.00
                  </Typography>
                </ThemeProvider>
                
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  )
}
