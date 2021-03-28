import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container , Box } from '@material-ui/core'
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
    // height: '109vh',
    padding: 0,
  },

  img: {
    // marginTop: '102px',
    marginTop: '95px',
    padding: '0px',
    
    '& img': {
      // height: '75vh',
    }
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    height: '75vh',
    justifyContent: 'center',
    // marginTop: '102px',
    marginTop: '95px',
    textAlign: "right",
  },

  button: {
    color: theme.palette.primary.main,
    justifyContent: 'center',
    marginBottom: '25px',
    paddingTop: 0,
  },
}))

export default function HomeFeedback({src,title,subtitle,name}) {
  const classes = useStyles()

  return (
    <Box>
      <Container maxWidth="xl" className={classes.root}>
        <Card>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              {/* Container： 为了让user图片在6/12那侧也居中 */}
              <Container maxWidth="sm">
                <CardContent className={classes.img}>
                  <CardMedia
                    component="img"
                    alt="User Image"
                    image={src}
                    title="User Image"
                  />
                </CardContent>
              </Container>
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* Container： 为了让右侧侧也居中 */}
              <Container maxWidth="sm">
                <CardContent className={classes.text}>
                  <Typography 
                    variant="h3"
                    component="h3"
                  >
                    {title}
                  </Typography>

                  <Typography 
                    variant="h4"
                    component="h4"
                  >
                    {subtitle}
                  </Typography>

                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="h5"
                  >
                    {name}
                  </Typography>
                </CardContent>
              </Container>
            </Grid>

            {/* Container： 为了让下方button居中 */}
            <Container maxWidth="sm">
              <Grid item xs={12} sm={12}>
                <CardActions className={classes.button}>
                  <Button color="primary" className={classes.arrowIcon}>
                    <KeyboardArrowLeftIcon />
                  </Button>

                  <Button color="primary" className={classes.arrowIcon}>
                    <KeyboardArrowRightIcon />
                  </Button>
                </CardActions>
              </Grid>
            </Container>
          </Grid>
        </Card>
      </Container>
    </Box>
  )
}

