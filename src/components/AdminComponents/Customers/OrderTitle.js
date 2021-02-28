import React from 'react'
import { Typography } from '@material-ui/core'
import style from '../scss/Admin.module.scss'

export default function OrderTitle() {
  return (
    <Typography variant="h4" className={style.orderTitle}>
      Three bedroom apartment bond cleaning
    </Typography>
  )
}