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
    // color: theme.palette.text.secondary,
  },
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



        {/* Onging Orders */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography>
                    Ongoing Orders
                  </Typography>
                </ThemeProvider>             
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    2
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
        {/* Total Earns */}
        <Grid item xs={12} sm={6}>
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
        </Grid>
      </Grid>
    </div>
  )
}
