import React from 'react'
import HomeSelectForm from './HomeSelectForm'

import scssStyle from './scss/HomeContent.module.scss'


const HomeTitle = () => (
  <div className={scssStyle.background}>

    <div className={scssStyle.title}>
      We Clean. You Relax
    </div>

    <div className={scssStyle.subtitle}>
      Get your housekeeping done now!
    </div>

    <HomeSelectForm />
  </div>
)

export default HomeTitle