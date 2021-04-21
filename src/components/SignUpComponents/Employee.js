/* eslint no-unused-vars: "error" */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] *///
import React from 'react'
// import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
// import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Divider from '@material-ui/core/Divider'
import {useDispatch,useSelector } from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {useForm,Controller } from 'react-hook-form'
import CircularProgress from '@material-ui/core/CircularProgress'
// import { ErrorOutline } from '@material-ui/icons'
import {PopupButton} from './Button'
import FormDialogLoginPop from './FormDialogLoginPop'
// import PopupFormLogin from './PopupFormLogin'
import {registerEmployee} from "../../store/actions/actionCreator"
// import FormDialogLogin from "./PopupFormLogin"
// import PopupFormLogin from './PopupFormLogin'




export default function EmployeeRegistrationForm() {
  const {control ,handleSubmit} = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) =>{
    // console.log(data)
    dispatch(registerEmployee(data)) // 发送saga请求
  }
  const employeeRegister = useSelector((state) => state.employeeRegister)
  const { userInfo, loading, error } = employeeRegister

  
   
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
    padding: '0px, 0px, 0px, 25px',
    paddingTop: '1vh',
    fontWeight:'bold',
    fontSize:'30px'
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: '30px',
    },
    width:'92%',
    marginBottom:10,
  },
  text:{
    fontWeight:'bold',
    width:'85%',
    marginLeft:'6%'
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
  button:{
    width:'100%',
  },
  agreement:{
    fontWeight: 'bold',
    fontSize:'11px',
    marginLeft:'16px',
    width:'100%',
    marginBottom:'5px',
    marginRight:'10%'
  },
  divide:{
    borderBottom: "1px solid black",
    width:'90%',
    marginBottom:10
  },
  account:{
    fontWeight: 'bold',
    fontSize:'11px',
    marginLeft:'16px',
    marginBottom:'-25px'
  },
  login:{
    fontWeight: 'bold',
    color: '#007bf5',
    // float: 'right',
    fontSize:'11px',
    textDecoration: 'none',
    // paddingTop:-20,
    paddingLeft:80
  
  },
  loginColor:{
    textDecoration: 'none',
    color: '#007bf5',
  }

}))

const classes = useStyles()
    return (
      <>
        <Grid container justify="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justify="center">
              <DialogTitle className="Dialog-title">
                <Typography
                  className={classes.title}
                  align="center"
                >
                  Join us
                </Typography>
              </DialogTitle>
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
                Your registration successfully!
              </Typography>
              )}
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
                    id="outlined"
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
              <a href="/forgetpassword/employee">
                <Typography
                  className={classes.mention}
                >
                  Forgot Password?
                </Typography>
              </a>
            </Grid>
            
            <Grid container justify="center">
              <PopupButton 
                type="submit"
              />
            
            </Grid>
            <Grid container justify="center" item xs={12}>
              <Typography
                className={classes.agreement}
              >
                By signing up, I agree to terms & conditions.
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
              <Grid container className={classes.login} justify="flex-end">
               
             
                <FormDialogLoginPop />
               
              </Grid>
            </Grid>
          </form>
        </Grid>
      </>
    )
  }





