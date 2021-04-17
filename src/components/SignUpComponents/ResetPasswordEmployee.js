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
import {resetpasswordEmployee} from "../../store/actions/actionCreator"
import {ConfirmButton} from './Button'




export default function ResetPasswordEmployee() {
  
  // const bull = <span className={classes.bullet}>•</span>
  const {control ,handleSubmit} = useForm()
  const dispatch = useDispatch()
    const onSubmit = (data) =>{
      dispatch(resetpasswordEmployee(data))
      
    }

    

    const resetPassword = useSelector((state) => state.resetpasswordEmployee)
    const { userInfo, loading, error } = resetPassword
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
            minWidth: '200%',
            // minHeight: 300,
          },
          text:{
            marginLeft:35,
            marginRight:200,
            paddingTop:30,
            paddingBottom:15,
            fontWeight:'bold',
            // width:'85%',
            // marginRight:'15px',
          },
          textField: {
            width:'85%',
            marginBottom:35,
           // marginRight:200,
           // marginLeft:200,

            
          },
          response: {
            fontWeight:'bold',
            paddingBottom: '30px',
            fontSize:'15px',
            width:'45%',
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
            <Grid container>
              <Typography
                className={classes.text}
              >
                Enter your verfication key
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Controller
                as={(
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    id="outlined-basic-key"
                    label="resetPasswordToken"
                    type="resetPasswordToken"
                    variant="outlined"
                  />
                    )}
                name="resetPasswordToken"
                control={control}
                defaultValue=""
              />
                
            </Grid>
            <Grid container>
              <Typography
                className={classes.text}
              >
                Enter your new password
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Controller
                as={(
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    id="outlined-basic-password"
                    label="password"
                    type="password"
                    variant="outlined"
                  />
                    )}
                name="password"
                control={control}
                defaultValue=""
              />
                
            </Grid>
            <Grid container>
              <Typography
                className={classes.text}
              >
                Confirm your password
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Controller
                as={(
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    id="outlined-basic-confirm"
                    label="confirmationPassword"
                    type="password"
                    variant="outlined"
                  />
                    )}
                name="confirmationPassword"
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
                Your password successfully updated
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