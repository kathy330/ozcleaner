import React from "react"
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
  top: {
    marginTop: '30px',
  }
}))

export default function OrderLeft() {
  const classes = useStyles()


  return(
    <Box className={classes.top}>
      <Container maxWidth="lg">
        <Typography variant='h4'>
          Set up your cleaning service
        </Typography>

        <Typography variant='h4'>
          Do you need anything extra?
        </Typography>

        <Typography variant='h4'>
          Service Address
        </Typography>

        <Typography variant='h4'>
          Payment Information
        </Typography>
      </Container>
    </Box>
  )
}
