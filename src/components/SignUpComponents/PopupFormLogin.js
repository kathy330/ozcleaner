import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import LoginDetails from './LoginForm'



export default function FormDialogLogin() {
   
  const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    
  
  

    return (
      <>
        <Button onClick={handleClickOpen}>
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




