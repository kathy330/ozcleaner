/* eslint-disable */
import React, { useEffect } from 'react'
import { Grid, Typography, makeStyles, Card, CardContent, Divider, Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { updateRegularRequest } from "../../store/actions"
import OrderActionButtons from './Customers/OrderActionButtons'


// style
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
  card: {
    border: '1px solid',
    marginTop: 20,
    marginBottom: 50,
    borderRadius: 40,
    maxWidth: 200,
    margin: 'auto',
  },
  text: {
    textAlign: 'center',
  },
  price: {
    color: '#007bf5',
    textAlign: 'center',
  },
  button: {
    margin: 'auto',
    marginBottom: 20,
    backgroundColor: '#cc584e',
  },
  cancel: {
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
    borderRadius: '25px',
    marginInline: '25px',
    '&:hover': {
      background: theme.palette.secondary.hover,
      boxShadow: '0px 2px 10px #888888',
    },
  },
  dialog: {
    padding: '40px'

  }
}))

function AdminCustomersRight(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { orderPrice, orderStatus, _id, typeOfOrder } = props
  const [open, setOpen] = React.useState(false)
  // const data = { taskid: ID, orderstatus: "in-progress" }
  const data = { id: _id, orderstatus: "cancelled", type: typeOfOrder }
  const toFinishData = { id: _id, orderstatus: "finished", type: typeOfOrder }
  const toAcceptData = { id: _id, orderstatus: "in-progress", type: typeOfOrder }
  console.log(data)
  const [state] = React.useState({
    status: { orderStatus }
  })
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleCancelOrder = () => {
    setOpen(false)
    dispatch(updateRegularRequest(data))
  }
  useEffect(() => {
    console.log(state.status, 'state.status')
  }, [state])


  const authLevel = localStorage.getItem('authLevel')
  console.log(authLevel)


  return (
    <Grid item xs={12} sm={3} className={classes.root}>
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialog}>
          Do you want to cancel this order?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelOrder} color="primary">
            YES
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog> */}

      <Card className={classes.card}>
        <CardContent>
          <Grid item xs={12}>
            <Typography className={classes.text} variant="subtitle2" gutterBottom>
              PRICE
            </Typography>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <Typography className={classes.price} variant="h3" color="textSecondary">
              $
              {orderPrice}
            </Typography>
          </Grid>
          <Divider />
        </CardContent>
      </Card>

      {(authLevel === 'admin') && (<OrderActionButtons cancel='cancel' finish='finish' accept='' cancelData={data}
        finishData={toFinishData} acceptData={toAcceptData} />)}
      {(authLevel === 'user') && (<OrderActionButtons cancel='cancel' finish='' accept='' cancelData={data}
        finishData={toFinishData} acceptData={toAcceptData} />)}
      {(authLevel === 'employee') && (<OrderActionButtons cancel='' finish='finish' accept='accept' cancelData={data}
        finishData={toFinishData} acceptData={toAcceptData} />)}
    </Grid>
  )
}
export default AdminCustomersRight
