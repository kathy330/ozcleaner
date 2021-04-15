/* eslint-disable */
import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { updateOrderRequest, updateAssignRequest } from "../../../store/actions"


// styles
const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
    borderRadius: '25px',
    marginInline: '25px',
    margin: '15px',
    '&:hover': {
      background: theme.palette.secondary.hover,
      boxShadow: '0px 2px 10px #888888',
    },
    minWidth: '120px',
  }
}))

export default function OrderActionButtons({ cancel, finish, accept, cancelData, finishData, acceptData }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)
  const [status, setStatus] = React.useState({
    actionType: 'No actions',
  })
  const { actionType } = status
  // console.log(actionType)

  const handleCancelOrder = () => {
    setOpen(false)
    const { actionType } = status
    // console.log(actionType)
    if (actionType === 'cancel') {
      dispatch(updateOrderRequest(cancelData))
      // alert('Your order has been set CANCELLED successfully! ')
    }

    else if (actionType === 'finish') {
      dispatch(updateOrderRequest(finishData))
      // alert('Your order has been set FINISHED successfully! ')
    }
    else if (actionType === 'accept') {
      console.log(acceptData);
      dispatch(updateAssignRequest(acceptData))
      // alert('You ACCEPT this order successfully! ')
    }


  }
  const handleCancel = () => {
    setOpen(true)
    setStatus({ actionType: 'cancel' })
  }
  const handleFinish = () => {
    setOpen(true)
    setStatus({ actionType: 'finish' })
  }
  const handleAccept = () => {
    setOpen(true)
    setStatus({ actionType: 'accept' })
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialog}>
          Do you want to {actionType} this order?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelOrder} color="primary">
            YES
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog>
      {(cancel === 'cancel') && (<Button className={classes.button} onClick={handleCancel}>
        CANCEL
      </Button>)}
      {(finish === 'finish') && (<Button className={classes.button} onClick={handleFinish}>
        FINISH
      </Button>)}
      {(accept === 'accept') && (<Button className={classes.button} onClick={handleAccept}>
        ACCEPT
      </Button>)}
    </>
  )
}

