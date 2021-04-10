import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
// import style from '../scss/Admin.module.scss'

// style
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingLeft: 10,
  },
})

export default function Extra(props) {
  const classes = useStyles()

  let items = ''
  if (Object.values(props)[0] === 1) {
    items = "Cabinets, "
  }
  if (Object.values(props)[1] === 1) {
    items += "Fridge, "
  }
  if (Object.values(props)[2] === 1) {
    items += "Oven, "
  }
  if (Object.values(props)[3] === 1) {
    items += "InteriorWindows  "
  }
  if (Object.values(props) === [0, 0, 0, 0, "RC"] || Object.values(props) === [0, 0, 0, 0, "EC"]) {
    items = "No extra items. "
  }
  let item = ''
  if (Object.values(props)[4] === "EC") {
    item = "Cabinets, Fridge, Oven, InteriorWindows "
  } else { item = items.slice(0, -2) }

  return (
    <Grid container direction="column" className={classes.root}>
      <Typography variant="subtitle2">
        Extra
      </Typography>
      <Typography variant="body2">
        {item}
      </Typography>
    </Grid>
  )
}
