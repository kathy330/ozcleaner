/* eslint-disable */
import React from "react"
import { makeStyles, Container, Grid } from '@material-ui/core'
import AdminCustomersLeft from "../AdminComponents/AdminCustomersLeft"
import AdminCustomersRight from "../AdminComponents/AdminCustomersRight"
import Footer from '../FooterComponents/Footer'
import LoadingIcon from '../AdminComponents/LoadingIcon'
import Header from '../NavBarComponents/NavBar'

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
  bg: {
    paddingBottom: '50px',
    paddingTop: "30px",
  },
  body: {
    backgroundColor: "white",
    minHeight: "85vh",
    padding: '100px',
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

function OrderDetailComponent(props) {
  const classes = useStyles()

  const {data} = props
  // let redux = useSelector(state => state.order)
  // let redux2 = useSelector(state => state.employee_in_reducer_index)

  // console.log(redux, 'redux')
  // console.log(loading,)


  return (
  <>
    {localStorage.getItem("authLevel") == "employee" && <Header />}
      <Grid className={classes.bg}>
        {/* {endTime} */}
        <Container maxWidth="md" className={classes.body}>
          {displayPage(data)}
        </Container>
      </Grid>
    {localStorage.getItem("authLevel") == "employee" && <Footer /> }
  </>
  )
}

export default OrderDetailComponent
