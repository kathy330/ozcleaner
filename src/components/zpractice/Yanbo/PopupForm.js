import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
// import './scss/Style.css'
// import Divider from '@material-ui/core/Divider'
import {makeStyles} from '@material-ui/core/styles'
import DividerWithText from './Divider'
import {PopupButton} from './Button'
// import {buttonStyle} from '../../../styles/styles'

export default function FormDialog() {
    const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
 const useStyles = makeStyles({
  textField: {
    [`& fieldset`]: {
      borderRadius: '30px',
    },
    height:30,
    width:250,
    marginBottom:"15px",
  },
  text:{
    marginLeft:'10%',
  },
  mention:{
    fontFamily: "museo-sans, sans-serif",
    fontWeight: 'bold',
    color: '#007bf5',
    float: 'right',
    marginBottom: '10px',
    textDecoration: 'none',
    marginLeft:'7%'
  }
})
/* const DividerText = ({ children }) => (
  <div className="container">
    <div className="border" />
    <span className="content">
      {children}
    </span>
    <div className="border" />
  </div>
) */
const classes = useStyles()   
    
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Join Us
        </Button>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <Grid container direction="column">
            <Grid container justify="center">
              <DialogTitle className="Dialog-title">Join us</DialogTitle>
            </Grid>
            <DialogContent>
              <Grid>
                <h3 className={classes.text}>Email</h3>
              </Grid>
              <Grid container justify="center">
                <TextField
                  className={classes.textField}
                  margin="dense"
                  id="outlined-basic"
                  label="Email"
                  type="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <h3 className={classes.text}>Password</h3>
              </Grid>
              <Grid container justify="center">
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
              </Grid>
              <Grid>
                <a className={classes.mention} href="/password">Forgot Password?</a>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Grid container justify="center">
                <PopupButton />  
              </Grid> 
            </DialogActions>
            <Grid container justify="center">
              <DividerWithText>or sign up with</DividerWithText>
            </Grid>
            <DialogActions>
              <Grid container justify="center">
                <PopupButton />  
              </Grid> 
              

            </DialogActions>
          </Grid>
          
        </Dialog>
       
        
      </div>
    )
  }