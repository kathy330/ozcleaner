import React from 'react'
import { Grid, Divider, makeStyles } from '@material-ui/core'


import OrderTitle from './Customers/OrderTitle'
import CreatedBy from './Customers/CreatedBy'
import AssginedTo from './Customers/AssginedTo'
import Location from './Customers/Location'
import DueDate from './Customers/DueDate'
import Extra from './Customers/Extra'
import Review from './Customers/Review'
import Status from './Customers/Status'
import Names from './Customers/Names'
import PhoneNumber from './Customers/PhoneNumber'
// import user1 from '../../assets/user1.jpg'

// style
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // backgroundColor: 'lightgreen',
    marginBottom: 20,
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    border: 'solid 1px #e8ebfa',
    maxWidth: '95%',
    marginLeft: 5,
  },
}))


const AdminCustomersLeft = ({ dueDate, orderTitle,
  customerFirstName, customerLastName, location, rate, cab, fri, ov, intWin, reviewText,
  orderStatus, typeOfOrder, phone }) => {
  const classes = useStyles()
  // const { dueDate, orderTitle,
  //   customerFirstName, customerLastName, location, rate, reviewText } = props
  // console.log(props, 'this is props')
  return (
    <Grid item xs={12} sm={9} className={classes.root}>
      <OrderTitle title={orderTitle} />
      <CreatedBy firstName={customerFirstName} lastName={customerLastName} />
      <Divider className={classes.divider} />
      <AssginedTo />
      <Divider className={classes.divider} />
      <Status status={orderStatus} />
      <Divider className={classes.divider} />
      <Names firstName={customerFirstName} lastName={customerLastName} />
      <Divider className={classes.divider} />
      <Location address={location} />
      <Divider className={classes.divider} />
      <PhoneNumber phoneNumber={phone} />
      <Divider className={classes.divider} />
      <DueDate endTime={dueDate} />
      <Divider className={classes.divider} />
      <Extra cabinets={cab} fridge={fri} oven={ov} interiorWindows={intWin} type={typeOfOrder} />
      <Divider className={classes.divider} />
      <Review rating={rate} review={reviewText} />
    </Grid>
  )
}

export default AdminCustomersLeft