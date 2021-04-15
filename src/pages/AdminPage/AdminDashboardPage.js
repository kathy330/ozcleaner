/* eslint-disable */
import React, { useEffect } from 'react'
import { Grid, Container, Paper,  Box, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/AdminComponents/Dashboard/Card'
import OrderTable from '../../components/AdminComponents/Dashboard/OrderTable'
import UserAvatar from "../../components/AdminComponents/Dashboard/UserAvatar"
import { getAllOrersRequest} from '../../store/actions/actionCreator'
import LoadingIcon from '../../components/AdminComponents/LoadingIcon'
import NoDataFound from '../../components/AdminComponents/NoDataFound'

const columns = [
  { id: 'Order ID', label: 'Order ID', minWidth: 80, align: 'left' },
  { id: 'Feature', label: 'Feature', minWidth: 120, align: 'center' },
  {
    id: 'Order Date',
    label: 'Order Date',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'Due Date',
    label: 'Due Date',
    minWidth: 80,
    align: 'center',
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'Assignee',
    label: 'Assignee',
    minWidth: 120,
    align: 'center',
  },
]

let UserName = [
  {
    firstName: 'Hello',
    lastName: 'World'
  },
  {
    firstName: 'Iello',
    lastName: 'Xorld'
  },
  {
    firstName: 'Jello',
    lastName: 'Yorld'
  },
  {
    firstName: 'Kello',
    lastName: 'Zorld'
  }
]

const useStyles = makeStyles((theme) => ({
  body: {
    paddingBottom: '100px',
    paddingTop: "80px",
  },
  item: {
    paddingLeft: "60px"
  }
}
))


export default function Overview() {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrersRequest({page: 1, pageSize: 40, status: "", sort: "datedesc"}))
  },[])

  const data = useSelector(state => state.order.order.result)
  const dataCount = useSelector(state => state.order.order.count) // number of orders
  const loading = useSelector(state => state.order.loading) // loading status
  const error = useSelector(state => state.order.error) // error message
  if (!loading && dataCount) {
    const count = []
    UserName = []
    for (const row of data) {
      if (!count.includes(row.userDetail[0]._id)) {
        count.push(row.userDetail[0]._id)
        UserName.push(row.userDetail[0].name)
      }
      if (count.length === 4 ) break
    }
  }


  return (
    <>
      {loading && <LoadingIcon />}
      {!loading && dataCount > 0 && (
      <>
        <Container maxWidth="lg" className={classes.body}>
          <Box fontWeight="fontWeightBold" mb={1} fontSize={35}>
            Dashboard
          </Box>
          <Box fontWeight="fontWeightBold" mb={2} fontSize={30} color="#9e9e9e">
            Welcome Back!
          </Box>
          <Box fontWeight="fontWeightBold" mb={2} fontSize={25}>
            Quick status
          </Box>
          <Grid container spacing={6}>

            {[1, 2, 3, 4].map((x, i) =>
        (
          <Grid item>
            <Card key={x} other={i} />
          </Grid>
        )
        )}
          </Grid>
          <Paper elevation={0}>
            <Box mt={10} pl={2} pb={5}>
              <Box fontWeight="fontWeightBold" fontSize={25} ml={1} pt={3} mb={2}>
                Recent Order
              </Box>
              <OrderTable
                columns={columns}
                UserData={data.slice(0,5)}
              />
            </Box>
          </Paper>

          <Paper elevation={0}>
            <Box mt={10} pl={2} pb={5}>
              <Box fontWeight="fontWeightBold" fontSize={25} ml={0.5} pt={3} pb={5}>
                Recent Customer
              </Box>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {UserName.map((user) => (
              // <Grid container alignItems="center" direction="row">
                  <Grid item xs={3} className={classes.item}>
                    <UserAvatar 
                      firstName={user.firstName}
                      lastName={user.lastName}
                    />
                  </Grid>
              // </Grid>
            ))}
              </Grid>
            </Box>
          </Paper>
        </Container>
      </>
  )}
      {!loading && data !== undefined && data.length === 0 &&
      <NoDataFound title="No order found!" />} 
      {!loading && error && console.log(error) }
    </>
  )
}