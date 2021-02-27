import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'

export default function FormDialog() {
    const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    const useStyles = makeStyles({
        root: {
          // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          fontSize:'3.8rem',
          fontWeight:'bold',
          textAlign:'center',
          borderRadius:60,
          input:{
            borderRadius:30
        }
        },
        
      })

    const classes = useStyles()
  
    return (
        
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          黑猫警长向您致敬
        </Button>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle className={classes.root}>Join us</DialogTitle>
          <DialogContent>
            <DialogTitle>Email</DialogTitle>
            <TextField
              className={classes.root}
              autoFocus
              margin="dense"
              id="outlined-basic"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
            <DialogTitle>Password</DialogTitle>
            <TextField
              autoFocus
              margin="dense"
              id="outlined-basic"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Login
            </Button>
            <Button onClick={handleClose} color="primary">
              Registration
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }