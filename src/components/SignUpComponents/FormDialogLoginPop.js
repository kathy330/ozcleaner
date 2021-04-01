/*eslint-disable*/
import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import {makeStyles} from '@material-ui/core/styles'
import LoginDetails from './LoginForm'


export default function FormDialogLoginPop() {
   
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
       
        login:{
          fontWeight: 'bold',
          color: '#007bf5',
          // float: 'right',
          fontSize:'12px',
          textDecoration: 'none',
          marginRight:'20px',
          marginTop:'-6px',
          marginBottom:'20px'
        },
       
      }))
    
    const classes = useStyles()
  

    return (
      <>
        <Button className={classes.login} onClick={handleClickOpen}>
          Login
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth='xs'
        >
          <LoginDetails />
        </Dialog>
      </>
    )
    }

