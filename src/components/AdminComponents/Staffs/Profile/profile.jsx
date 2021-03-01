import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonSimple from "../ButtonSimple"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
  des:{
      display:"inline-block",
      fontSize: 15
  },
  area:{
      height:3
  }
}))

export default function BasicTextFields() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="subtitle1" className={classes.des}>First Name</Typography>
      <TextField id="outlined-basic" variant="outlined" size="small" />
      <br />
      <Typography variant="subtitle1" className={classes.des}>Last Name</Typography>
      <TextField id="outlined-basic" variant="outlined" size="small" />
      <br />
      <Typography variant="subtitle1" className={classes.des}>Password</Typography>
      <TextField id="outlined-basic" variant="outlined" size="small" />
      <br />
      <Typography variant="subtitle1" className={classes.des}>Postcode</Typography>
      <TextField id="outlined-basic" variant="outlined" size="small" />
      <br />
      <Typography variant="subtitle1" className={classes.des}>Email</Typography>
      <TextField id="outlined-basic" variant="outlined" size="small" />
      <br />
      <Typography variant="subtitle1" className={classes.des}>Phone</Typography>
      <TextField id="outlined-basic" variant="outlined" size="small" />
      <br />
      <Typography variant="subtitle1" className={classes.des}>Status</Typography>
      <Box
        color="white"
        bgcolor="palevioletred"
        p={1}
        borderRadius={15}
        textAlign="center"
        display="inline-block"
      >
        Available
      </Box>
      <Box margin="auto">
        <ButtonSimple />
      </Box>
    </form>
  )
}
