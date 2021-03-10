import React from 'react'
import {Avatar} from '@material-ui/core'
// import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
// import Divider from '@material-ui/core/Divider'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { deepOrange} from '@material-ui/core/colors'
// import DividerWithText from './Divider'
import {PopupButton} from './Button'


export default function PopDetails() {
    const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
},
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
    fontWeight: 'bold',
    
  },
  textField: {
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
    fontSize:'12px',
    marginBottom:'15px',
    marginTop:'-10px'
    
  },
  Countinue:{
    marginTop:'40px',
    marginBottom:'20px'
  }
 
}))

const classes = useStyles()
    return (
      <> 
        <Avatar onClick={handleClickOpen} className={classes.orange}>J</Avatar>
             
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
                Welcome
              </Typography>
            </DialogTitle>
          </Grid>
          <Grid container justify="center">
            <Typography
              className={classes.mention}
            >
              Tell us about yourself to set up your profile
            </Typography>
          </Grid>

          <Grid container>
            <Typography
              className={classes.text}
            >
              First Name
            </Typography>
          </Grid>
          <Grid container justify="center">
            <TextField
              className={classes.textField}
              margin="dense"
              id="outlined-basic"
              label="First Name"
              type="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <Typography
              className={classes.text}
            >
              Last Name
            </Typography>
          </Grid>
          <Grid container justify="center">
            <TextField
              className={classes.textField}
              margin="dense"
              id="outlined-basic"
              label="Last Name"
              type="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <Typography
              className={classes.text}
            >
              Enter your home suburb
            </Typography>
          </Grid>
          <Grid container justify="center">
            <TextField
              className={classes.textField}
              margin="dense"
              id="outlined-basic"
              label="Enter a suburb"
              type="Enter a suburb"
              variant="outlined"
            />
          </Grid>
          <Grid container justify="center" className={classes.Countinue}>
            <PopupButton />
          </Grid>
       
        </Dialog>
      </>
  )
}












