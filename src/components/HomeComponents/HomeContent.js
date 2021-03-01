import React from 'react'
// import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import HomeSelectForm from './components/HomeSelectForm'

import scssStyle from './scss/HomeContent.module.scss'

const useStyles = makeStyles(() => ({
  title: {
    padding: '10px 30px',
    position: 'relative',
    top: '38vh',

  },

  subtitle: {
    padding: '10px 30px',
    position: 'relative',
    top: '40vh',
  }
  
}))


const HomeTitle = () => {
  const classes = useStyles()

  return(
    <Box className={scssStyle.background}> 

      <Typography
        variant="h3"
        align="center"
        component="h3" // 用于根节点的组件。使用HTML元素的字符串或组件。
        className={classes.title}
      >
        We Clean. You Relax.
      </Typography>

      <Typography
        variant="h5"
        align="center"
        component="h5"
        className={classes.subtitle}
      >
        Get your housekeeping done now!
      </Typography>

      <HomeSelectForm />
    </Box>
  )
}
export default HomeTitle