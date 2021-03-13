import React from 'react'
import { Typography } from '@material-ui/core'
import scssStyle from '../scss/Profile.module.scss'

export default function ProfileTitle() {
  return (
    <Typography variant="h4" className={scssStyle.title}>
      Profile
    </Typography>
  )
}