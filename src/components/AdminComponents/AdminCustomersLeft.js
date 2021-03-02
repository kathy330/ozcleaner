import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import OrderTitle from './Customers/OrderTitle'
import CreatedBy from './Customers/CreatedBy'
// import AssginedTo from './Customers/AssginedTo'
import Location from './Customers/Location'
import Extra from './Customers/Extra'
import Review from './Customers/Review'
// import user1 from '../../assets/user1.jpg'

// style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: 'lightgreen'
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
      <CreatedBy />
      {/* <CreatedBy image='BJ' name='Ben' time='2020.03.02' title='Assgined To' /> */}
      {/* <AssginedTo /> */}
      <Location />
      <Extra />
      <Review />
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