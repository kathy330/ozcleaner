import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import HomeSelectForm from './components/HomeSelectForm'

import scssStyle from './scss/HomeContent.module.scss'

const useStyles = makeStyles(() => ({
  title: {
    // height: '47vh',
    padding: '0px 30px',
    paddingTop: '45vh',
  },

  subtitle: {
    // height: '6vh',
    padding: '0px 30px',
    paddingTop: '2vh',
  },
  
}))


const HomeTitle = () => {
  const classes = useStyles()

  return(
    <Box className={scssStyle.background}> 
      <Grid
        container
        // direction="column" //因为设置了paddingTop: '45vh'，所以这个不用也可以布局
        // justify="center"
        // alignItems="center"
        spacing={0}
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            component="h3" // 用于根节点的组件。使用HTML元素的字符串或组件。
            className={classes.title}
          >
            We Clean. You Relax.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h5"
            align="center"
            component="h5"
            className={classes.subtitle}
          >
            Get your housekeeping done now!
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <HomeSelectForm />
        </Grid>
        
      </Grid>
    </Box>
  )
}
export default HomeTitle