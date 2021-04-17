/* eslint-disable */
import React, { useEffect } from 'react'
import { Grid, Typography, makeStyles, Card, CardContent, Divider } from '@material-ui/core'
import OrderActionButtons from './Customers/OrderActionButtons'


// style
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
  card: {
    border: '1px solid',
    marginTop: 20,
    marginBottom: 50,
    borderRadius: '5px',
    width: '200px',
    // height: '153px',
    padding: '20px 20px 40px',
  },
  text: {
    // textAlign: 'center',
  },
  price: {
    color: '#007bf5',
    textAlign: 'center',
    padding: '10px',
    marginTop: '10px',
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
  },
}))

function AdminCustomersRight(props) {
  const classes = useStyles()
  const { orderPrice, orderStatus, _id, typeOfOrder } = props
  // const data = { taskid: ID, orderstatus: "in-progress" }
  const data = { id: _id, update: { status: "cancelled" }, type: typeOfOrder }
  const toFinishData = { id: _id, update: { status: "finished" }, type: typeOfOrder }
  const toAcceptData = { id: _id, update: { status: "in-progress" }, type: typeOfOrder }
  const [state] = React.useState({
    status: { orderStatus }
  })

  useEffect(() => {
    console.log(state.status, 'state.status')
  }, [state])


  const authLevel = localStorage.getItem('authLevel')

  return (
    <Grid item xs={12} sm={3} className={classes.root} >
      <div className={classes.card} >
        {/* <CardContent> */}
        {/* <Grid item xs={12}> */}
        <Typography className={classes.text} variant="subtitle2" gutterBottom>
          PRICE
            </Typography>
        {/* </Grid> */}
        <Divider />
        {/* <Grid item xs={12}> */}
        <Typography className={classes.price} variant="h4" color="textSecondary">
          $
              {orderPrice}
        </Typography>
        {/* </Grid> */}
        <Divider />
        {/* </CardContent> */}
      </div>
      <Grid container direction="row"
        justify="center"
        alignItems="center">
        {(authLevel === 'admin') && (<OrderActionButtons cancel='cancel' finish='finish' accept='' cancelData={data}
          finishData={toFinishData} acceptData={toAcceptData} />)}
        {(authLevel === 'user') && (<OrderActionButtons cancel='cancel' finish='' accept='' cancelData={data}
          finishData={toFinishData} acceptData={toAcceptData} />)}
        {(authLevel === 'employee') && (<OrderActionButtons cancel='' finish={orderStatus === "in-progress" ? "finish" : ""} accept={orderStatus === "confirmed" ? "accept" : ""} cancelData={data}
          finishData={toFinishData} acceptData={toAcceptData} />)}
      </Grid>
    </Grid>
  )
}
export default AdminCustomersRight
