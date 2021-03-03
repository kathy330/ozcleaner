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
import Typography from '@material-ui/core/Typography'
// import { BlockRounded } from '@material-ui/icons'
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
  title:{
    padding: '0px 30px',
    paddingTop: '2vh',
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: '30px',
    },
    height:30,
    width:250,
    marginTop:'0px',
    marginBottom:"20px",
  },
  text:{
    fontWeight:'bold',
    marginLeft:3,
  },
  mention:{
    fontWeight: 'bold',
    color: '#007bf5',
    float: 'right',
    fontSize:'12px',
    textDecoration: 'none',
    marginLeft:'30%'
  },
  divider:{
    fontWeight: 'bold',
    fontSize:'12px'
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
              <DialogTitle className="Dialog-title">
                <Typography
                  className={classes.title}
                  align="center"
                  variant="h4"
                >
                  Join us
                </Typography>
                
                
                
              </DialogTitle>
            </Grid>
            <DialogContent>
              <Grid>
                <Typography
                  className={classes.text}
                >
                  Email
                </Typography>
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
                <Typography
                  className={classes.text}
                >
                  Password
                </Typography>
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
                <a href="/password">
                  <Typography
                    className={classes.mention}
                  >
                    Forgot Password?
                  </Typography>
                </a>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Grid container justify="center">
                <PopupButton />  
              </Grid> 
            </DialogActions>
            <Grid container justify="center">
              <DividerWithText>
                <Typography
                  className={classes.divider}
                >
                  or sign up with
                </Typography>

              </DividerWithText>
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