/* eslint-disable */
import React, { useEffect } from 'react'
import { Grid, Typography, makeStyles, Card, CardContent, Divider, Button } from '@material-ui/core'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { updateRegularRequest } from "../../store/actions"
// import { SecondaryButton } from '../UIComponents/Buttons'
import { Link, Redirect } from 'react-router-dom'

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
  const { orderPrice, orderStatus, _id } = props
  const [open, setOpen] = React.useState(false)
  // const data = { taskid: ID, orderstatus: "in-progress" }
  const data = { id: _id, orderstatus: "cancelled" }
  console.log(data)

  const [state, setState] = React.useState({
    status: props.orderStatus
  })

  let repo = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleCancelOrder = () => {
    setOpen(false)
    dispatch(updateRegularRequest(data))

    // console.log('1')
    // Redirection()
    // console.log('2')
    // console.log(state.status)
    // const id = '1'
    // const data = {
    //   "status": "in-progress"
    // }
    // axios.put(`http://localhost:8000/regular/${id}`, data).then((res) => {
    //   console.log(res.data);
    // })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log(repo)
    // setState({ status: "cancelled" })

  }
  // const Redirection = () => {
  //   if (state.status === 'cancelled') {
  //     return (<Redirect to="/admin/order" />)
  //   }
  // }

  useEffect(() => {
    // console.log(orderStatus, 'orderstatus')
    console.log(state.status, 'state.status')
  }, [state])




  // const RedirectLink = (props) => {
  //   const { to } = props
  //   const Redirect = props => <Link to={to}{...props} />
  //   if (status === 'cancelled') {
  //     return <Redirect component={RedirectLink} />
  //   }
  // }
  return (
    <Grid item xs={12} sm={3} className={classes.root}>
      <Dialog open={open} onClose={handleClose}>
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
      </Dialog>

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
      <Button onClick={handleClickOpen} className={classes.cancel}>
        CANCEL ORDER
      </Button>

      {/* {state.status === 'cancelled' ? (<>Your order has cancelled! </>) : (<Button onClick={handleClickOpen} className={classes.cancel}>
        CANCEL ORDER
      </Button>)
      } */}

    </Grid >
  )
}

export default AdminCustomersRight
