import React from "react"
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'
import Nav from '../../components/NavBarComponents/NavBar'
import crying from "../../assets/crying.svg" 
import Footer from '../../components/FooterComponents/Footer'
// import logo from "../../assets/logo.svg" 
// https://www.flaticon.com/free-icon/crying_817847?related_id=817847&origin=search
// https://www.flaticon.com/free-icon/broom_2731291
// import Footer from '../../components/FooterComponents/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '5vh',
      paddingTop: '10vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingBottom: '15vh',
      paddingTop: '30vh',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '30vh',
      paddingTop: '30vh',
    },
  },


  img: {
    height: '30vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingTop: '1vh',
    },
  },

  button: {
    borderRadius: '30px',
    marginTop: '5vh',
    width: '200px',
  },

  text1: {
    fontSize: '5.5rem',
  },

  text2: {
    fontSize: '2rem',
  }
}))

function ErrorPage(){
  const classes = useStyles()

    return (
      <>
        <Nav />
        <Box className={classes.root}>
          <Container maxWidth="lg" className={classes.content}>
            <Grid container spacing={0}>
              
              <Grid item xs={12} md={6}>
                <Container maxWidth="lg">
                  <Grid container spacing={0} justify="center">
                    <Grid item>
                      <img src={crying} className={classes.img} alt="error icon" />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>

              <Grid item xs={12} md={6}>
                <Container maxWidth="lg">
                  <p className={classes.text1}>
                    404
                  </p>
                  <p className={classes.text2}>
                    
                    Oops, Something Went Wrong...
                  </p>
                </Container>
              </Grid>
              
            </Grid>
          </Container>
        </Box>
        <Footer />
      </>
    )
}

export default ErrorPage