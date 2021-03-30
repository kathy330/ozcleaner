import React from "react"
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Nav from '../../components/NavBarComponents/NavBar'
import crying from "../../assets/crying.svg" 
// import logo from "../../assets/logo.svg" 
// https://www.flaticon.com/free-icon/crying_817847?related_id=817847&origin=search
// https://www.flaticon.com/free-icon/broom_2731291
// import Footer from '../../components/FooterComponents/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
  },

  content: {
    // marginTop: '11vh',
    height: '90vh',
  },

  right: {
  
  },

  img: {
    height: '30vh',
    paddingTop: '10vh',
  },

  left: {
    background: 'white',
    margin: '10px',
    maxWidth: '700px',
    minHeight: "353px",
    paddingLeft: '5vh',
    paddingTop: '10vh',
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: '11vh',
    }
  },

  button: {
    borderRadius: '30px',
    marginTop: '5vh',
    width: '200px',
  }
}))

function ErrorPage(){
  const classes = useStyles()

    return (
      <>
        <Box className={classes.root}>
          <Nav />
          <Container className={classes.content}>
            <Grid container>
              <Grid item xs={12} sm={6} className={classes.left}>
                <Typography variant="h6">
                  Oops, Something Went Wrong...
                </Typography>
               
                <Button href="/" variant="contained" color="primary" className={classes.button}>
                  Back to home
                </Button>
              </Grid>

              <Grid item xs={12} sm={5} className={classes.right}>
                <img src={crying} className={classes.img} alt="error icon" />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    )
}

export default ErrorPage