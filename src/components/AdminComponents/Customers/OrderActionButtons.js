/* eslint-disable */
import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { updateOrderRequest} from "../../../store/actions"


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
  }
}))

export default function OrderActionButtons({ cancel, finish, accept, id, type }) {
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

    let data = { id: id, update: { status: actionType === 'accept' ? "in-progress" : actionType }, type: type }
    if (actionType === 'cancelled' && localStorage.getItem('authLevel') === "admin") {
      data ={ id: id, update: { status: "confirmed" }, type: type, cancelByAdmin: true }
    }
    dispatch(updateOrderRequest(data))

  }
  const handleCancel = () => {
    setOpen(true)
    setStatus({ actionType: 'cancelled' })
  }
  const handleFinish = () => {
    setOpen(true)
    setStatus({ actionType: 'finished' })
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

