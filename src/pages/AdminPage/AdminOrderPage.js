/* eslint-disable */
import React, { useEffect, useState } from "react"
import { makeStyles, Container, Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import AdminCustomersLeft from "../../components/AdminComponents/AdminCustomersLeft"
import AdminCustomersRight from "../../components/AdminComponents/AdminCustomersRight"
import Footer from '../../components/FooterComponents/Footer'
import { getOrderRequest, cancelRegularOrderRequest } from "../../store/actions"
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
const data = {
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

  // need user objID & employee objID
  if (typeof (repo) === 'string') { return <LoadingIcon /> }
  const { endTime, title, firstName, address, lastName,
    cabinets, fridge, oven, interiorWindows, rating, review, price, status, type, phoneNumber, _id, userDetail, employeeDetail } = repo
  // console.log(_id)
  // let re = /{|}|":"|"address1|"address2|"suburb|"state|"postcode|":/g
  // console.log(JSON.stringify(repo.address).replace(re, ''))
  // let re2 = /",/g
  // console.log(JSON.stringify(repo.address).replace(re, '').replace(re2, ', '))
  // console.log(JSON.stringify(address).replace(/{|}|":"|"address1|"address2|"suburb|"state|"postcode|":/g, '').replace(/",/g, ', '))

  let employeeFirstName, employeeLastName, employeeObjID = null
  const userFirstName = userDetail[0].name.firstName
  const userLastName = userDetail[0].name.lastName
  const userObjID = userDetail[0]._id
  // console.log(userDetail[0].name)
  if (employeeDetail[0] == null) {
    employeeFirstName = 'null'
    employeeLastName = 'null'
    employeeObjID = 'null'
  } else {
    employeeFirstName = employeeDetail[0].name.firstName
    employeeLastName = employeeDetail[0].name.lastName
    employeeObjID = employeeDetail[0]._id
  }
  // const userFirstName = userDetail[0].name.firstName
  // const userLastName = userDetail[0].name.lastName
  // const employeeFirstName = employeeDetail[0].name.firstName
  // const employeeLastName = employeeDetail[0].name.lastName
  // console.log(userFirstName, userLastName, employeeFirstName, employeeLastName)
  return (
    <>
      <Grid container spacing={2}>
        <AdminCustomersLeft
          userFirstName={userFirstName}
          userLastName={userLastName}
          employeeFirstName={employeeFirstName}
          employeeLastName={employeeLastName}
          dueDate={endTime}
          orderTitle={title}
          customerFirstName={firstName}
          customerLastName={lastName}
          orderStatus={status}
          phone={phoneNumber}
          // location={Object.values(address).join(', ')}
          location={JSON.stringify(address).replace(/{|}|":"|"address1|"address2|"suburb|"state|"postcode|":/g, '').replace(/",/g, ', ')}
          cab={cabinets}
          fri={fridge}
          ov={oven}
          intWin={interiorWindows}
          rate={rating}
          typeOfOrder={type}
          reviewText={review}
          userObjectID={userObjID}
          employeeObjectID={employeeObjID}
          _id={_id}
        />
        <AdminCustomersRight orderPrice={price}
          _id={_id}
          orderStatus={status}
          typeOfOrder={type} />
      </Grid>
    </>
  )
}

function AdminOrderPage(match) {
  const classes = useStyles()
  // const data = { taskid: 1 }
  // const objid = '60633937b175b8fccb933398'
  // const testData = { _id: '60633a30bad120ff885aa99c' }
  if (match.match) {
    const objid = match.match.params.id;
    const query = new URLSearchParams(match.location.search)
    // console.log(query)
    // console.log(match.location.search)
    const getType = query.get('type')
    const data = { _id: objid, type: getType }
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getOrderRequest(data))
    }, [])
  }

  // let redux = useSelector(state => state.order)
  // let redux2 = useSelector(state => state.employee_in_reducer_index)
  let redux = useSelector(state => state.order)
  let repo = redux.order
  let loading = redux.loading
  // console.log(redux, 'redux')
  // console.log(loading,)


  return (
    <Grid className={classes.bg}>
      {/* {endTime} */}
      <Container maxWidth="md" className={classes.body}>
        {(loading) && (<LoadingIcon />)}
        {(!loading) && repo.status && displayPage(repo)}
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
    </Grid>
  )
}

export default AdminOrderPage
