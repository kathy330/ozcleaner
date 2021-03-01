import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import OrderTitle from './Customers/OrderTitle'
import CreatedBy from './Customers/CreatedBy'
// import AssginedTo from './Customers/AssginedTo'
import Location from './Customers/Location'
import DueDate from './Customers/DueDate'
import Extra from './Customers/Extra'
import Review from './Customers/Review'
import user1 from '../../assets/user1.jpg'

// style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightgreen'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  left: {
    // margin: "0 800px"
    position: "relative",
    left: "2vh",

  },
  page: {
    display: 'flex',
    justifyContent: 'center',
  }
}))


const AdminCustomersLeft = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={9} className={classes.root}>
      <OrderTitle />
      <CreatedBy image={user1} name='Odas Pdsad' time='2020.03.02T18:00:00' title='CREATED BY' />
      <CreatedBy image='BJ' name='Ben Jack' time='2020.03.02T19:00:00' title='Assgined To' />

      {/* <AssginedTo /> */}
      <Location />
      <DueDate />
      <Extra />
      <Review />


      {/* <Grid container spacing={0} direction="column" className={classes.page}>
        <Grid item xs={12} className={classes.left}>
          <OrderTitle />
        </Grid>
        <Grid item xs={12} className={classes.left}>
          <CreatedBy />
        </Grid>
        <Grid item xs={12} className={classes.left}>
          <AssginedTo />
        </Grid>
        <Grid item xs={12} className={classes.left}>
          <Location />
        </Grid>
        <Grid item xs={12} className={classes.left}>
          <DueDate />
        </Grid>
        <Grid item xs={12} className={classes.left}>
          <Extra />
        </Grid>
        <Grid item xs={12} className={classes.left}>
          <Review />
        </Grid>
      </Grid> */}

    </Grid>

  )
}



// return (
//   <div>
//     <NavBar />
//     <div className={classes.adminCustomersPage}>
//       <div className={classes.root}>
//         <Grid container spacing={3}>
//           <Grid item xs={7} className={classes.left}>
//             {/* <div className={style.leftright}> */}
//             <AdminCustomersLeft />
//           </Grid>
//           <Grid item xs={5} className={classes.right}>
//             <AdminCustomersRight />
//           </Grid>
//         </Grid>
//         {/* </div> */}
//         {/* <footer /> */}
//       </div>
//     </div>
//   </div>
// )


export default AdminCustomersLeft