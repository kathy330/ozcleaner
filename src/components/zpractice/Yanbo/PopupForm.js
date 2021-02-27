import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import './scss/Style.css'
import {makeStyles} from '@material-ui/core/styles'

import PopupButton from './Button'
// import {buttonStyle} from '../../../styles/styles'

export default function FormDialog() {
    const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    
    // const style = buttonStyle()
    /*
    const StyledInput = withStyles({
      root: {
        
        borderRadius: 6,
        border: 0,
        marginBottom:'20px',
      },
    })(TextField) */
/*
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign:'center',
        borderRadius: "50px 50px 0 0"
      },
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: 300,
        [`& fieldset`]: {
      borderRadius: 30
    }
      },
    }))

  */  
 const useStyles = makeStyles({
  textField: {
    marginLeft:'40px',
    marginRight:'40px',
    width: 330,
    marginBottom:"15px"
  },
  
})
const Divider = ({ children }) => (
  <div className="container">
    <div className="border" />
    <span className="content">
      {children}
    </span>
    <div className="border" />
  </div>
)
const classes = useStyles()   
    
    return (
            
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Join Us
        </Button>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle className="Dialog-title">Join us</DialogTitle>
          <DialogContent>
            <h3 className="Dialog-title_email">Email</h3>
            <div className="Dialog-input">
              <TextField
                className={classes.textField}
                margin="dense"
                id="outlined-basic"
                label="Email"
                type="Email"
                variant="outlined"
              />
            </div>
            <h3 className="Dialog-title_email">Password</h3>
            <div className="Dialog-input">
              <TextField
                className={classes.textField}
                margin="dense"
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
              />
            </div>
            <a className="Dialog-mention" href="/password">Forgot Password?</a>
          </DialogContent>
          <DialogActions>
            <div className="Dialog-Button">
              <PopupButton  />
              <Divider>Or</Divider>
            </div>
            
            
            {/* <Button onClick={handleClose} color="primary">
              Login
            </Button>
            <Button onClick={handleClose} color="primary">
              Registration
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    )
  }