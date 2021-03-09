import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Divider from '@material-ui/core/Divider'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {MenuItem} from '@material-ui/core'
import DividerWithText from './Divider'
import {FbButton,GoogleButton,PopupLoginButton} from './Button'


export default function FormDialogMenuLogin() {
    const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign:'center',
  },
  [theme.breakpoints.between('sm','md')]: {
    textAlign:'center',
  },
  [theme.breakpoints.up('md')]: {
    textAlign:'center',
  },
  title:{
    padding: '0px 30px',
    paddingTop: '2vh',
    fontWeight:'bold',
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: '30px',
    },
    width:'85%',
    marginBottom:10,
  },
  text:{
    fontWeight:'bold',
    width:'85%',
    marginLeft:'8%'
  },
  mention:{
    fontWeight: 'bold',
    color: '#007bf5',
    float: 'right',
    fontSize:'12px',
    textDecoration: 'none',
    marginRight:'8%',
    marginBottom:'15px'
  },
  divider:{
    fontWeight: 'bold',
    fontSize:'12px',
  },
  agreement:{
    fontWeight: 'bold',
    fontSize:'12px',
    marginLeft:'34px',
    width:'100%',
    marginBottom:'5px' 
  },
  divide:{
    borderBottom: "1px solid black",
    width:'85%',
    marginBottom:10
  },
  account:{
    fontWeight: 'bold',
    fontSize:'12px',
    marginLeft:'34px',
    marginBottom:'-22px'
  },
  login:{
    fontWeight: 'bold',
    color: '#007bf5',
    // float: 'right',
    fontSize:'12px',
    textDecoration: 'none',
    marginRight:'10%',
    marginBottom:'30px'
  },
  loginColor:{
    textDecoration: 'none',
    color: '#007bf5',
  }
 
}))

const classes = useStyles()
    return (
      <>
        <MenuItem onClick={handleClickOpen}>
          Login
        </MenuItem>       
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth='xs'
        >
          <Grid container justify="center">
            <DialogTitle className="Dialog-title">
              <Typography
                className={classes.title}
                align="center"
                variant="h4"
              >
                Login
              </Typography>
            </DialogTitle>
          </Grid>
          <Grid container>
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
            <TextField
              className={classes.textField}
              margin="dense"
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
            />
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
            
          <Grid container justify="center">
            <PopupLoginButton />
          </Grid>
          <Grid container justify="center">
            <DividerWithText>
              <Typography
                className={classes.divider}
              >
                or login with
              </Typography>
            </DividerWithText>
          </Grid>
           
          <Grid container justify="center" item xs={12}>
            <FbButton />
          </Grid>
          <Grid container justify="center" item xs={12}>
            <GoogleButton />
          </Grid>
          <Grid container justify="center" item xs={12}>
            <Typography
              className={classes.agreement}
            >
              By logging in, I agree to terms & conditions.
            </Typography>
              
          </Grid>
          <Grid container justify="center" item xs={12}>
            <Divider className={classes.divide} />
          </Grid>
            
          <Grid container direction="row">
            <Grid container justify="flex-start">
              <Typography className={classes.account}>
                Do not have an account?
              </Typography>
              
            </Grid>
            <Grid container justify="flex-end">
               
              <Typography className={classes.login}>
                <a href="/login" className={classes.loginColor}>
                  Sign Up
                </a>
              </Typography>
               
            </Grid>
          </Grid>
        </Dialog>
      </>
    )
  }




