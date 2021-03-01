import React from 'react'
// import Grid from '@material-ui/core/Grid'
// import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import HomeSelectForm from './components/HomeSelectForm'

import scssStyle from './scss/HomeContent.module.scss'


const HomeTitle = () => (
  // Container 小于xl的话，背景图片有空隙
  // {/* Container 小于lg的话，form排不下最后一个picker */}
  <Container maxWidth="xl" className={scssStyle.background}> 
    <div className={scssStyle.title}>
      We Clean. You Relax.
    </div>
    <div className={scssStyle.subtitle}>
      Get your housekeeping done now!
    </div>
    <div className={scssStyle.form}>
      <HomeSelectForm />
    </div>
  </Container>
)
export default HomeTitle