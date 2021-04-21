/* eslint-disable */
import React from 'react'
import { Button, makeStyles, Typography, Divider } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { updateOrderRequest, updateAssignRequest } from "../../../store/actions"

// styles
const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.secondary.contrastText,
    borderRadius: '25px',
    marginInline: '25px',
    margin: '15px',
    '&:hover': {
      boxShadow: '0px 2px 10px #888888',
    },
    minWidth: '120px',
  },
  cancel: {
    background: '#F35162',
    '&:hover': {
      background: '#E55766',
    },
  },
  accept: {
    background: '#007bf5',
    '&:hover': {
      background: '#107CE6',
    },
  },
  finish: {
    background: '#89B153',
    '&:hover': {
      background: '#88AB59',
    },
  },
  dialog: {
    padding: '10px 40px 40px 40px',
  },
  confirm: {
    backgroundColor: '#3399ff',
    color: 'white',
    boxShadow: '2px 2px 2px 2px lightblue',
  },
}))

export default function OrderActionButtons({ cancel, finish, accept, cancelData, finishData, acceptData }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const [status, setStatus] = React.useState({
    actionType: 'No actions',
  })
  const { actionType } = status

  const handleCancelOrder = () => {
    setOpen(false)
    const { actionType } = status
    if (actionType === 'cancel') {
      dispatch(updateOrderRequest(cancelData))
    }
    else if (actionType === 'finish') {
      dispatch(updateOrderRequest(finishData))
    }
    else if (actionType === 'accept') {
      dispatch(updateAssignRequest(acceptData))
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
        <DialogTitle>
          Edit Confirmation
        </DialogTitle>
        <Divider />
        <Typography className={classes.dialog}>
          Do you want to {actionType} this order?
        </Typography>
        <DialogActions>
          <Button onClick={handleCancelOrder} className={classes.confirm}>
            YES
          </Button>
          <Button onClick={handleClose} className={classes.confirm} autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog>
      {(cancel === 'cancel') && (<Button className={`${classes.button} ${classes.cancel}`} onClick={handleCancel}>
        CANCEL
      </Button>)}
      {(finish === 'finish') && (<Button className={`${classes.button} ${classes.finish}`} onClick={handleFinish}>
        FINISH
      </Button>)}
      {(accept === 'accept') && (<Button className={`${classes.button} ${classes.accept}`} onClick={handleAccept}>
        ACCEPT
      </Button>)}
    </>
  )
}