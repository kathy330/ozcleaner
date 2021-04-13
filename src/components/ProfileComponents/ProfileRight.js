import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ProfileTitle from './components/ProfileTitle'
// import TextFields from './components/TextFields'
// import SaveButton from './components/SaveButton'
import TextForm from './components/TextForm'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '80vh',
  },

  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    textAlign: "center",
  },

  botton: {
    textAlign: "center",
  },

  marginLeft: {
    // marginLeft: '8vh',
    // [theme.breakpoints.down('xs')]: {
    //   marginLeft: '0',
    // }
  },
  
}))

export default function ProfileRight() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProfileTitle />
        </Grid>
        <Grid item xs={12} className={classes.marginLeft}>
          <TextForm />
        </Grid>
      </Grid>
    </div>
  )
}
