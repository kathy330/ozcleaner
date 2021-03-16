import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import {MenuItem} from '@material-ui/core'
import LoginDetails from './LoginForm'

export default function FormDialogMenuLogin() {
  const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    

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
          <LoginDetails />
        </Dialog>
      </>
    )
    }