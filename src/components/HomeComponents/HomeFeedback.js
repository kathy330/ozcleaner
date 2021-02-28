import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

// import scssStyle from './scss/HomeContent.module.scss'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    '& img': {
      height: '75vh',
    }
  },

  total: {
    display: 'flex',
    flexDirection: 'column',
    height: "85vh",
    padding: '0 120px',

  },

  card: {
    display: 'flex',
  },

  img: {
    marginTop: '24px',
    padding: '0 24px',
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    height: '75vh',
    justifyContent: 'center',
    marginTop: '24px',
    padding: '0 24px',
  },

  textDetail: {
    textAlign: "left",
  },

  button: {
    justifyContent: 'center',
    marginTop: '79vh',
    padding: 0,
  },

  arrowIcon: {
    color: theme.palette.primary.main,
    // fontSize: 40,
    padding: "10 20px",
  }
}))

export default function HomeFeedback({src}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <Grid container spacing={0}>
        <Card className={classes.total}>
          <div className={classes.card}>
            <Grid item xs={5}>
              <CardContent className={classes.img}>
                <CardMedia
                  component="img"
                  alt="User Image"
                  image={src}
                  title="User Image"
                />
              </CardContent>
            </Grid>

            <Grid item xs={2}>
              <CardActions className={classes.button}>
                <Button color="primary" className={classes.arrowIcon}>
                  <KeyboardArrowLeftIcon />
                </Button>

                <Button color="primary" className={classes.arrowIcon}>
                  <KeyboardArrowRightIcon />
                </Button>
              </CardActions>
            </Grid>

            <Grid item xs={5}>
              <CardContent className={classes.text}>
                <Typography 
                  variant="h3"
                  component="p"
                  className={classes.textDetail}
                >
                  User feedback Title.
                </Typography>

                <Typography 
                  variant="h4"
                  component="p"
                  className={classes.textDetail}
                >
                  User feedback here.
                </Typography>

                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p" 
                  className={classes.textDetail}
                >
                  - User Name
                </Typography>

          
              </CardContent>
            </Grid>
          </div>
        </Card>
      </Grid>
      
    </div>
  )
}

