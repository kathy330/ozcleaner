/* eslint-disable */
import React, { useEffect } from "react"
import { makeStyles, Container, Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import AdminCustomersLeft from "../../components/AdminComponents/AdminCustomersLeft"
import AdminCustomersRight from "../../components/AdminComponents/AdminCustomersRight"
import AdminCustomersTop from "../../components/AdminComponents/AdminCustomersTop"
import NavBar from '../../components/NavBarComponents/NavBar'
import Footer from '../../components/FooterComponents/Footer'
import { getREGULARRequest } from "../../store/actions"
import LoadingIcon from '../../components/AdminComponents/LoadingIcon'

// style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  // bg: {
  //   backgroundColor: '#eaeaea'
  // },
  body: {
    backgroundColor: "white",
    minHeight: "85vh",
    marginTop: "1vh",
  },
}))

// 暂定一个初始order数据，下面更改
const putData = {
  taskID: "3",
  address: {
    address1: "Room 101",
    address2: "22 Cat Street",
    suburb: "Miao",
    state: "Meme",
    postcode: "1234"
  },
  type: "RCCC",
  status: "finished",
  propertyType: "unknown",
  cabinets: 0,
  fridge: 0,
  oven: 0,
  interiorWindows: 0,
  review: "This is a review. ",
  rating: 2.5,
  title: "This is a title. ",
  bedroomNum: 2,
  bathroomNum: 3,
  price: 1.23,
  startTime: "2021-02-16T13:00:00",
  endTime: "2020-01-01T12:00:00",
  userID: "1234",
  employeeID: "1234",
  firstName: "Adams",
  lastName: "Bob",
}

function displayPage(repo) {
  //const classes = useStyles()
  const { endTime, title, firstName, address, lastName, rating, review, price, status } = repo[0]
  return (
    <>
      {/* <AdminCustomersTop /> */}
      <Grid container spacing={2}>
        <AdminCustomersLeft dueDate={endTime}
          orderTitle={title}
          customerFirstName={firstName}
          customerLastName={lastName}
          orderStatus={status}
          location={Object.values(address).join(', ')}
          rate={rating}
          reviewText={review} />
        <AdminCustomersRight orderPrice={price} />
      </Grid>
    </>
  )
}

function AdminCustomersPage() {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getREGULARRequest())
  }, [])
  let repo = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)
  //console.log(typeof repo)
  // const repo = putData
  // repo = repo[0]
  console.log(repo[0], '456')
  // console.log(repo.address)

  return (
    <Grid className={classes.bg}>
      {/* {endTime} */}
      <NavBar />
      <Container maxWidth="md" className={classes.body}>
        {(repo[0] === 'init value') && (<LoadingIcon />)}
        {(repo[0] !== 'init value') && displayPage(repo)}
      </Container>
      {/* <Container maxWidth="md" className={classes.body}>{repo.length}
        <AdminCustomersTop />
        <Grid container spacing={2}>
          <AdminCustomersLeft dueDate={endTime}
            orderTitle={title}
            customerFirstName={firstName}
            customerLastName={lastName}
            location={Object.values(address).join(', ')}
            rate={rating}
            reviewText={review} />
          <AdminCustomersRight orderPrice={price} />
        </Grid>
      </Container> */}
      <Footer />
    </Grid>
  )
}

export default AdminCustomersPage