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
import {resetpassword} from "../../store/actions/actionCreator"
import {ConfirmButton} from './Button'




export default function ResetPassword() {
  
  // const bull = <span className={classes.bullet}>•</span>
  const {control ,handleSubmit} = useForm()
  const dispatch = useDispatch()
    const onSubmit = (data) =>{
      console.log(data)
      dispatch(resetpassword(data))
      
    }

    

    const resetPassword = useSelector((state) => state.resetPassword)
    const { userInfo, loading, error } = resetPassword
    console.log(resetPassword)
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
                Enter your verfication token
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Controller
                as={(
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    id="outlined-basic"
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
            <Grid container justify="center">
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
                    id="outlined-basic"
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
            <Grid container justify="center">
              <Typography
                className={classes.text}
              >
                Enter your conformation password
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Controller
                as={(
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    id="outlined-basic"
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