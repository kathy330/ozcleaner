/* eslint-disable*/
import React from 'react'
// import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField'
// import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Divider from '@material-ui/core/Divider'
// import { Link } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {useForm,Controller } from 'react-hook-form'
import CircularProgress from '@material-ui/core/CircularProgress'
import DividerWithText from './Divider'
import {FbButton,GoogleButton,PopupLoginButton} from './Button'
import {signin} from "../../store/actions/actionCreator"
import FormDialogSignupPop from './FormDialogSignupPop'

export default function LoginDetails() {
    const {control ,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) =>{
      dispatch(signin(data))
    }

    // const signoutHandler = () => {
    //   dispatch(signout())
    // }

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo, loading, error } = userSignin
  
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column">      
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
              <Controller
                as={(
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    id="outlined-basic"
                    label="Email"
                    type="Email"
                    variant="outlined"
                  />
                )}
                name="email"
                control={control}
                defaultValue=""
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
              <Controller
                as={(
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
                      )}
                name="password"
                control={control}
                defaultValue=""
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
              {loading && <CircularProgress />}
              {error && (
              <Typography
                color="error"
                className={classes.text}
              >
                {error}
              </Typography>
            )}
              {userInfo && (
              <Typography
                color="primary"
                className={classes.text}
              >
                You are now signed in!
              </Typography>
            )}
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
               
                <FormDialogSignupPop/>
               
              </Grid>
            </Grid>
          </Grid>
        </form>  
      </>
    )
  }




