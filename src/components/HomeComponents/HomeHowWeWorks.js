import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { Container } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

// import scssStyle from './scss/HomeContent.module.scss'


const useStyles = makeStyles(() => ({
  img: {
    padding: 0,
  },

  textDetail: {
    paddingTop: '24px',
    textAlign: "center",
  },
}))

export default function HomeFeedback({src1,src2,src3}) {
  const classes = useStyles()

  return (
    // 🌟顺序：<Container />里套<Grid container />，里面再套<Grid item {12} />
    // 如果里面还想设置item{4}{4}{4}比例，上一层要用<Grid container spacing={0}>,不是<Container />

    // 🌟如果单纯想居中还可以用<Container />套着<Grid item {12}/>

    <Container maxWidth="xl">

      <CardContent className={classes.textDetail}>
        <Typography 
          variant="h3"
          component="p"
        >
          How we works.
        </Typography>
      </CardContent>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <CardActionArea className={classes.img}>
            <CardMedia
              component="img"
              alt="How we works image"
              image={src1}
              title="How we works image"
            />
          </CardActionArea>
        </Grid>

        <Grid item xs={12} md={4}>
          <CardActionArea className={classes.img}>
            <CardMedia
              component="img"
              alt="How we works image"
              image={src2}
              title="How we works image"
            />
          </CardActionArea>
        </Grid>

        <Grid item xs={12} md={4}>
          <CardContent className={classes.img}>
            <CardMedia
              component="img"
              alt="How we works image"
              image={src3}
              title="How we works image"
            />
          </CardContent>
        </Grid>         
      </Grid>
    </Container>
  )
}

