import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
import {useForm,Controller } from 'react-hook-form'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import {forgetpassword} from "../../store/actions/actionCreator"
import {ConfirmButton} from './Button'




export default function ForgetPassword() {
  
  // const bull = <span className={classes.bullet}>•</span>
  const {control ,handleSubmit} = useForm()
  const dispatch = useDispatch()
    const onSubmit = (data) =>{
      dispatch(forgetpassword(data))
      console.log(data.email)
    }

    

    const forgetPassword = useSelector((state) => state.forgetPassword)
    const { userInfo, loading, error } = forgetPassword
    console.log(forgetPassword)
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
        root: {
            minWidth: '220%',
            // minHeight: 300,
          },
          text:{
            paddingTop:30,
            paddingBottom:30,
            fontWeight:'bold',
            // width:'85%',
            marginRight:'15px',
          },
          textField: {
            width:'85%',
            marginBottom:45,
          },
          response: {
            fontWeight:'bold',
            paddingBottom: '30px',
          },
        }))
    const classes = useStyles()
  
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
      item
      xs={12}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <Grid container justify="center">
              <Typography
                className={classes.text}
              >
                Enter your Email address to receive verfication email
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
            <Grid container justify="center">
              {loading && <CircularProgress />}
              {error && (
              <Typography
                color="error"
                className={classes.response}
                align="center"
              >
                {error}
              </Typography>
            )}
              {userInfo && (
              <Typography
                color="primary"
                className={classes.response}
                align="center"
              >
                Sent successfully! Please check your email
              </Typography>
            )}
        
              <Grid container justify="center">
                <ConfirmButton />
              </Grid>
            </Grid>
          </Card>
        </Grid>   
      </form>
    </Grid>
   
    
  )
}