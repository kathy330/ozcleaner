import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import KingBedIcon from '@material-ui/icons/KingBed'
import BathtubIcon from '@material-ui/icons/Bathtub'
import RoomIcon from '@material-ui/icons/Room'
import NoteIcon from '@material-ui/icons/Note'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import IconButton from '@material-ui/core/IconButton'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles(() => ({
  icon: {
    color: '#707070',
  },

  hover: {
    padding: 0,
  },

  price: {
    color: '#007bf5',
  },

  totalText: {
    paddingTop: '10px',
  },

  top: {
    marginBottom: '30px',
    marginTop: '30px',
  }
}))

export default function OrderRight() {
  const classes = useStyles()
  const [showForm, setShowForm] = React.useState(false)
  console.log(setShowForm)
  return (
    <Box className={classes.top}>
      <Container maxWidth="lg">
        <Grid container direction="column">
          <Container maxWidth="sm">
            <Grid item xs={6} sm={12}>
              <Grid container direction="row">
                <Grid item xs={6} sm={2}>
                  {/* <KingBedIcon fontSize="large" className={classes.icon}  /> */}
                  <IconButton className={classes.hover}>
                    {!showForm ?
                      <KingBedIcon fontSize="large" className={classes.icon} />
                      : <IndeterminateCheckBoxIcon />}
                  </IconButton>
                </Grid>
                <Grid item xs={6} sm={10}>
                  <Typography variant='h6'>Bedrooms x 2</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Grid container direction="row">
                <Grid item xs={6} sm={2}>
                  <BathtubIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={6} sm={10}>
                  <Typography variant='h6'>Bathrooms x 2</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Grid container direction="row">
                <Grid item xs={6} sm={2}>
                  <NoteIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={6} sm={10}>
                  <Typography variant='h6'>Bond Cleaning</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Grid container direction="row">
                <Grid item xs={6} sm={2}>
                  <RoomIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={6} sm={10}>
                  <Typography variant='h6'>
                    Unit 502, 18 Buchan Street, West End, 4101, QLD
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Grid container direction="row">
                <Grid item xs={6} sm={2}>
                  <CalendarTodayIcon fontSize="large" className={classes.icon} />
                </Grid>
                <Grid item xs={6} sm={10}>
                  <Typography variant='h6'>12:00PM, Friday, 29 Jan 2021</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Container>
      <Divider />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6} sm={6}>
            <Typography align="left" variant='h4' className={classes.totalText}>
              Total
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography align="right" variant='h3' className={classes.price}>
              $220
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
