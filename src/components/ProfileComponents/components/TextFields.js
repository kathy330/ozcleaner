import React from 'react'
import { makeStyles,TextField,Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: "center",
    },
  },
}))



export default function TextFields() {
  const classes = useStyles()
  const [name, setName] = React.useState('')
  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">  
      <Typography variant="h6"> First name</Typography>  
      <div>
        <TextField
          id="outlined-first-name"
          // label="First name"
          value={name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <Typography variant="h6"> Second name</Typography>
      <div>
        <TextField
          id="outlined--second-name"
          // label="Second name"
          value={name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <Typography variant="h6"> Address</Typography>
      <div>
        <TextField
          id="outlined-address-name"
          // label="Address"
          value={name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <Typography variant="h6"> Email Address</Typography>
      <div>
        <TextField
          id="outlined-email-name"
          // label="Email Address"
          value={name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <Typography variant="h6"> Phone</Typography>
      <div>
        <TextField
          id="outlined-phone"
          value={name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <Typography variant="h6"> Password </Typography>
      <div>
        <TextField
          id="outlined-password"
          value={name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <Typography variant="h6"> Birthday </Typography>
      <div>
        <TextField
          id="birthday"
          value={name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
    </form>
  )
}
