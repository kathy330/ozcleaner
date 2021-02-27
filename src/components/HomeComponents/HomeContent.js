import React from 'react'
// import Grid from '@material-ui/core/Grid'
// import { makeStyles } from '@material-ui/core/styles'
import HomeSelectForm from './HomeSelectForm'

import scssStyle from './scss/HomeContent.module.scss'



const HomeTitle = () => (
  <div className={scssStyle.background}>
      
    <div className={scssStyle.title}>
      We Clean. You Relax.
    </div>
  
    <div className={scssStyle.subtitle}>
      Get your housekeeping done now!
    </div>

    <div className={scssStyle.form}>
      <HomeSelectForm />
    </div>
  </div>
)


export default HomeTitle