/* eslint-disable */
import React, { useEffect } from "react"
import { makeStyles, Container, Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import AdminCustomersLeft from "../../components/AdminComponents/AdminCustomersLeft"
import AdminCustomersRight from "../../components/AdminComponents/AdminCustomersRight"
import AdminCustomersTop from "../../components/AdminComponents/AdminCustomersTop"
import NavBar from '../../components/NavBarComponents/NavBar'
import Footer from '../../components/FooterComponents/Footer'
import { getREGULARRequest, getENDRequest, cancelRegularOrderRequest } from "../../store/actions"
import LoadingIcon from '../../components/AdminComponents/LoadingIcon'


import { useForm, Controller } from "react-hook-form"

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
  const { endTime, title, firstName, address, lastName,
    cabinets, fridge, oven, interiorWindows, rating, review, price, status, type, phoneNumber } = repo[0]
  console.log(repo[0], '10')


  return (
    <>
      <Grid container spacing={2}>
        <AdminCustomersLeft dueDate={endTime}
          orderTitle={title}
          customerFirstName={firstName}
          customerLastName={lastName}
          orderStatus={status}
          phone={phoneNumber}
          location={Object.values(address).join(', ')}
          cab={cabinets}
          fri={fridge}
          ov={oven}
          intWin={interiorWindows}
          rate={rating}
          typeOfOrder={type}
          reviewText={review} />
        <AdminCustomersRight orderPrice={price}
          orderStatus={status} />
      </Grid>
    </>
  )
}

function AdminCustomersPage() {
  const classes = useStyles()
  const { watch } = useForm()
  const type = watch("type", "")


  const dispatch = useDispatch()
  useEffect(() => {
    //get（假定已经拿到所有数据了)
    // get data
    dispatch(getREGULARRequest())
    // dispatch(getENDOFLEASERequest())
    // post

  }, [])

  let repo = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)
  // let repo2 = useSelector()
  // console.log(Object.keys(repo[0]))

  // if (Object.values(repo[0]).includes('EC')) {
  //   useEffect(() => {
  //     // dispatch(getREGULARRequest())
  //     dispatch(getENDOFLEASERequest())
  //   }, [])
  //   let repo = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)
  // }


  console.log(repo[0], '456')
  console.log(repo, '789')


  return (
    <Grid className={classes.bg}>
      {/* {endTime} */}
      <NavBar />
      <Container maxWidth="md" className={classes.body}>
        {(repo === 'init value') && (<LoadingIcon />)}
        {(repo !== 'init value') && displayPage(repo)}
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