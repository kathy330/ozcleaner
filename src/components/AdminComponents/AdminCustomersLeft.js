import React from 'react'
import { Grid, Divider, makeStyles } from '@material-ui/core'


import OrderTitle from './Customers/OrderTitle'
import CreatedBy from './Customers/CreatedBy'
import AssginedTo from './Customers/AssginedTo'
import Location from './Customers/Location'
import DueDate from './Customers/DueDate'
import Extra from './Customers/Extra'
import Review from './Customers/Review'
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


const AdminCustomersLeft = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={9} className={classes.root}>
      <OrderTitle />
      <CreatedBy />
      <Divider className={classes.divider} />
      {/* <CreatedBy image='BJ' name='Ben' time='2020.03.02' title='Assgined To' /> */}
      <AssginedTo />
      <Divider className={classes.divider} />
      <Location />
      <Divider className={classes.divider} />
      <DueDate />
      <Divider className={classes.divider} />
      <Extra />
      <Divider className={classes.divider} />
      <Review />
    </Grid>
  )
}

export default AdminCustomersLeft