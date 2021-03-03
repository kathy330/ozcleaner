import React from 'react'
import {  Grid, Typography } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

export default function Extra() {
  return (
    <Grid container direction="column">
      <Typography variant="subtitle2">
        Extra
      </Typography>
      <Typography variant="body2">
        Oven, Fridge
      </Typography>
    </Grid>
  )
}
